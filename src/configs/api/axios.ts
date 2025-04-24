import axios from "axios";
import {getAccessToken, getTelegramAuthData, setAccessToken, isDevMode} from "../auth/token.ts";
import {jwtDecode} from "jwt-decode";

const BASE_URL = import.meta.env.DEV 
  ? '/bot-api'  // This will be proxied through Vite
  : import.meta.env.VITE_BOT_API_URL;

export const botApi = axios.create({
    baseURL: BASE_URL
});

export const backendApi = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_API_URL}`
})

export const login = (telegramAuthData: object) => {
    if (isDevMode()) {
        // Mock successful login response for dev mode
        return Promise.resolve({
            data: {
                accessToken: 'dev_mode_token'
            }
        });
    }
    return botApi.post('/login', telegramAuthData);
}

const loginAndSaveToken = async (telegramAuthData: object) => {
    const loginResponse = await login(telegramAuthData)
    const newToken = loginResponse.data.accessToken
    setAccessToken(newToken);

    return newToken;
}

const getOrRenewToken = async () => {
    const token = getAccessToken();
    const authData = getTelegramAuthData();

    if (!token) {
        if (!authData) {
            return token;
        }
        return await loginAndSaveToken(authData)
    }

    // Skip token validation in dev mode
    if (isDevMode()) {
        return token;
    }

    try {
        const tokenData = jwtDecode(token);
        if (authData && tokenData.exp && tokenData.exp < Date.now() / 1000) {
            return await loginAndSaveToken(authData);
        }
    } catch (e) {
        console.warn("Invalid JWT Token", token, e);
    }

    return token
}

// Add the JWT access token to the request or renew it if it's expired
backendApi.interceptors.request.use(
    async (config) => {
        const token = await getOrRenewToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);