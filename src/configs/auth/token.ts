import {TelegramAuthData} from "@telegram-auth/react";

const telegramAuthDataKey = 'telegramAuthData';
const accessTokenKey = 'accessToken';
const devModeKey = 'devMode';

export const getAccessToken = () => {
    if (import.meta.env.DEV && localStorage.getItem(devModeKey) === 'true') {
        return 'dev_mode_token';
    }
    return localStorage.getItem(accessTokenKey);
};

export const setAccessToken = (token: string) => {
    return localStorage.setItem(accessTokenKey, token);
};

export const getTelegramAuthData = () => {
    if (import.meta.env.DEV && localStorage.getItem(devModeKey) === 'true') {
        return {
            id: 123456789,
            first_name: "Dev",
            username: "dev_user",
            photo_url: "",
            auth_date: Math.floor(Date.now() / 1000),
            hash: "dev_mode_hash"
        };
    }
    const authData = localStorage.getItem(telegramAuthDataKey);
    return authData ? JSON.parse(authData) : null;
};

export const setTelegramAuthData = (authData: TelegramAuthData) => {
    return localStorage.setItem(telegramAuthDataKey, JSON.stringify(authData));
};

export const logout = () => {
    localStorage.removeItem(telegramAuthDataKey);
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(devModeKey);
};

export const enableDevMode = () => {
    localStorage.setItem(devModeKey, 'true');
};

export const disableDevMode = () => {
    localStorage.removeItem(devModeKey);
};

export const isDevMode = () => {
    return import.meta.env.DEV && localStorage.getItem(devModeKey) === 'true';
};