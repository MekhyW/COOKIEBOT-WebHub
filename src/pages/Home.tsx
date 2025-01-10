import cookieAvatar from '../assets/cookiebot_avatar.jpeg';
import styles from '../styles/Home.module.scss';

import { FormattedMessage } from "react-intl";
import { useState } from 'react';
import { LanguageMenu } from '../components/LanguageMenu';
import { Globe, SignIn } from '@phosphor-icons/react';

export default function Home() {

    const [showLanguageConfig, setShowLanguageConfig] = useState(false);

    return (
        <main className="relative min-h-screen bg-[url('./assets/Background2.png')]">
            <div>
                <div className="top-0 w-full flex justify-between items-center px-10 py-5">
                    <img src={cookieAvatar} className="rounded-md h-12"></img>
                    <nav className='flex sm:flex-row flex-col'>
                        <a href="/privacy" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Privacy</a>
                        <a href="https://t.me/cookiebotupdates" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Development</a>
                        <a href="https://github.com/MekhyW/COOKIEBOT-Telegram-Group-Bot" className="text-zinc-600 hover:text-yellow-500 font-bold">Github</a>
                    </nav>
                    <div className='flex flex-row justify-center items-center'>
                        <a href="/dashboard/home" className="flex flex-row bg-gradient-to-l from-yellow-700 to-yellow-900 hover:bg-yellow-500 hover:scale-105 text-white px-4 py-2 rounded-lg justify-center items-center space-x-2">
                            <span className='flex flex-row justify-center items-center mr-2 font-bold'><SignIn size={16} />Login</span>
                        </a>
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
                <div className="mt-64 text-start">
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
            </div>
        </main>
    )
}