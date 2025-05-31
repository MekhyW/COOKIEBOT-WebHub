'use client'

import { setTelegramAuthData } from '@/lib/auth/token';
import { LoginButton } from '@telegram-auth/react';
import { TelegramAuthData } from "@telegram-auth/react";

export default function TelegramLoginButton() {
    return (
        <div className="App">
            <LoginButton
                botUsername={process.env.TELEGRAM_BOT_USERNAME}
                onAuthCallback={(data) => {
                    console.log(data);
                    setTelegramAuthData(data);
                    window.location.replace("/dashboard");
                }}
            />
        </div>
    );
}
