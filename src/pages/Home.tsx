import { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { Globe } from '@phosphor-icons/react';

import cookieAvatar from '../assets/cookiebot_avatar.jpeg';
import styles from '../styles/Home.module.scss';

import { LanguageMenu } from '../components/LanguageMenu';
import { BackgroundImage } from '../components/MovingBackground/MovingBackground';
import {LoginButton} from "@telegram-auth/react";
import {useWebhubContext} from "../context/WebhubContext.tsx";
import {login} from "../configs/api/axios.ts";
import {useGetUserGroups} from "../configs/api/groups.ts";
import {setTelegramAuthData} from "../configs/auth/token.ts";
import { enableDevMode, isDevMode, disableDevMode } from "../configs/auth/token.ts";

const UserGroups = () => {
    const {data, error, isFetching} = useGetUserGroups()

    if (isFetching) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    if (!data?.data) return <p>No data</p>

    if (data) {
        console.log(data.data)
    }

    return (
        <div className={"text-red-900 text-2xl"}>
            <h1>User Groups: </h1>
            {data && data.data.map((group: { name: string }) => { return <p key={group.name}>{group.name}</p> })}
        </div>
    );
}

export default function Home() {
    const [showLanguageConfig, setShowLanguageConfig] = useState(false);
    const { setAccessToken, isLoggedIn } = useWebhubContext();

    return (
        <main className="relative min-h-screen">
            <BackgroundImage />
            <div className="relative min-h-screen bg-[url('./assets/Overlay.png')] bg-cover">
                <div className="top-0 w-full flex justify-between items-center px-10 py-5 z-10">
                    <img src={cookieAvatar} className="rounded-md h-12" alt="Cookie Avatar"></img>
                    <nav className='flex sm:flex-row flex-col'>
                        <a href="/privacy" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Privacy</a>
                        <a href="https://t.me/cookiebotupdates" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Development</a>
                        <a href="https://github.com/MekhyW/COOKIEBOT-Telegram-Group-Bot" className="text-zinc-600 hover:text-yellow-500 font-bold">Github</a>
                    </nav>
                    <div className='flex flex-row justify-center items-center'>
                        {import.meta.env.DEV && (
                            <button
                                onClick={() => {
                                    if (isDevMode()) {
                                        disableDevMode();
                                        window.location.reload();
                                    } else {
                                        enableDevMode();
                                        setAccessToken('dev_mode_token');
                                        window.location.reload();
                                    }
                                }}
                                className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                {isDevMode() ? 'Disable Dev Mode' : 'Enable Dev Mode'}
                            </button>
                        )}
                        <LoginButton
                            botUsername={"CookieMWbot"}
                            onAuthCallback={async (authData) => {
                                setTelegramAuthData(authData)

                                const loginResult = await login(authData)
                                setAccessToken(loginResult.data.accessToken)
                            }}
                            buttonSize="large"
                            cornerRadius={5}
                            showAvatar={true}
                            lang="en"
                        />
                        <div className='ml-2'>
                            <div className={styles.home__content__language}>
                                <button onClick={() => setShowLanguageConfig(!showLanguageConfig)}><Globe size={32} color='#000' /></button>
                            </div>
                            {showLanguageConfig &&
                                <LanguageMenu />
                            }
                        </div>

                    </div>
                </div>
                <div className="mt-64 text-start z-10">
                    <div className="flex flex-col items-start text-center ml-0 sm:ml-10">
                        <h1 className="text-8xl font-extrabold text-yellow-600 font-lobster ml-6">Cookiebot!</h1>
                        <div className="ml-6 text-start w-96">
                            <p className="text-4xl font-medium text-yellow-700 font-lobster break-normal">
                                <FormattedMessage id="home.slogan" />
                            </p>
                        </div>
                        <a href='https://t.me/CookieMWbot?startgroup=new' className="shadow-xl mt-4 ml-6 px-6 py-3 bg-gradient-to-l from-yellow-700 to-yellow-900 hover:scale-105 font-bold text-white rounded-lg text-lg hover:bg-yellow-600">
                            <FormattedMessage id="home.inviteMeButton" /> +
                        </a>
                    </div>
                </div>

                <div className={"mt-10 text-start sm:ml-10"}>
                    {isLoggedIn && <UserGroups></UserGroups>}
                </div>

            </div>
        </main>
    );
}
