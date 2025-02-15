import {TelegramAuthData} from "@telegram-auth/react";

const telegramAuthDataKey = 'telegramAuthData';
const accessTokenKey = 'accessToken';

export const getAccessToken = () => {
    return localStorage.getItem(accessTokenKey);
};

export const setAccessToken = (token: string) => {
    return localStorage.setItem(accessTokenKey, token);
};

export const getTelegramAuthData = () => {
    const authData = localStorage.getItem(telegramAuthDataKey);
    return authData ? JSON.parse(authData) : null;
};

export const setTelegramAuthData = (authData: TelegramAuthData) => {
    return localStorage.setItem(telegramAuthDataKey, JSON.stringify(authData));
};

export const logout = () => {
    localStorage.removeItem(telegramAuthDataKey);
    localStorage.removeItem(accessTokenKey);
};