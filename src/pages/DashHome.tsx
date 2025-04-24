import styles from '../styles/Home.module.scss';
import cookieAvatar from '../assets/cookiebot_avatar.jpeg';
import { FormattedMessage } from "react-intl";
import { useState } from 'react';
import { LanguageMenu } from '../components/LanguageMenu';
import { Globe, Gear, Wrench, AddressBook, Article, Users } from '@phosphor-icons/react';
import { useGetChatCount } from '../hooks/useGetChatCount';

export default function DashHome() {
    const [showLanguageConfig, setShowLanguageConfig] = useState(false);
    const { data: chatCount, isLoading, isError } = useGetChatCount();

    return (
    <main className="bg-[url('./assets/home_background.png')] min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <div className="relative">
                <div>
                    <div className={styles.home__content__language}>
                        <button onClick={() => setShowLanguageConfig(!showLanguageConfig)}><Globe size={32} color='#000' /></button>
                    </div>
                    {showLanguageConfig &&
                        <LanguageMenu />
                    }
                </div>
                <div className="w-20 h-20 mx-auto">
                    <img src={cookieAvatar} className="rounded-full"></img>
                </div>
                <h1 className="text-xl font-bold mt-4 text-black"><FormattedMessage id="home.welcome" /></h1>
                <h3 className="text-black">
                    <FormattedMessage 
                        id="home.groupBotCount"
                        values={{ count: isLoading ? '...' : isError ? 'N/A' : chatCount?.number_chats || 0 }}
                    />
                </h3>
                <h3 className="text-black"><FormattedMessage id="home.inviteMeText"/></h3>

                <a href='https://t.me/CookieMWbot?startgroup=new' className="bg-amber-950 text-white px-4 py-2 rounded-md mt-4 font-medium flex justify-center mx-auto">
                    <span className="mr-2">+</span> <FormattedMessage id="home.inviteMeButton"/>
                </a>

                <div className="mt-6 space-y-3">
                    <a href='/dashboard/general' className="w-full bg-orange-100 text-amber-800 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><Gear size={20} color='#000' /></div>
                        <FormattedMessage id="home.generalconfig"/>
                    </a>
                    <a href='/dashboard/moderation' className="w-full bg-orange-100 text-amber-800 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><Wrench size={20} color='#000' /></div>
                        <FormattedMessage id="home.moderation"/>
                    </a>
                    <a href='/dashboard/posts' className="w-full bg-orange-100 text-amber-800 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><AddressBook size={20} color='#000' /></div>
                        <FormattedMessage id="home.posts"/>
                    </a>
                    <a href='https://t.me/CookiebotPostmail' className="w-full bg-yellow-100 text-yellow-700 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><Article size={20} color='#000' /></div>
                        <FormattedMessage id="home.updates"/>
                    </a>
                    <a href='https://t.me/+mX6W3tGXPew2OTIx' className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><Users size={20} color='#000' /></div>
                        <FormattedMessage id="home.testgroup"/>
                    </a>
                    <a href='https://t.me/cookiebotupdates' className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg flex items-center justify-start px-4">
                        <div className='mr-4'><Users size={20} color='#000' /></div>
                        <FormattedMessage id="home.updateschannel"/>
                    </a>
                </div>
            </div>
        </div>
    </main>
    );
}