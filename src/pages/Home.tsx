import { Avatar } from '@telegram-apps/telegram-ui';
import styles from '../styles/Home.module.scss';

import cookieAvatar from '../assets/cookiebot_avatar.jpeg';

import { FormattedMessage } from "react-intl";
import { useState } from 'react';
import { LanguageMenu } from '../components/LanguageMenu';
import { Gear, Globe, Image, Plus, Star, Sticker, User, UserCircle } from '@phosphor-icons/react';
import { MenuButton } from '../components/MenuButton';

export default function Home() {

    const [showLanguageConfig, setShowLanguageConfig] = useState(false);

    return (
        <>
            <main className={styles.home}>
                <div className={styles.home__content}>
                    <div className={styles.home__content__language}>
                        <button onClick={() => setShowLanguageConfig(!showLanguageConfig)}><Globe size={32} color='#000' /></button>
                    </div>
                    <Avatar size={96} className={styles.home__content__avatar} src={cookieAvatar} />
                    <h2><FormattedMessage id="home.welcome" /></h2>
                    <h3><FormattedMessage id="home.groupBotCount"/></h3>
                    <h3><FormattedMessage id="home.inviteMeText"/></h3>

                    <button className={styles.home__content__btnAddMe} type='button'> <Plus size={18} color='#ffffff'/><h3><FormattedMessage id="home.inviteMeButton"/></h3></button>

                    {showLanguageConfig &&
                        <LanguageMenu />
                    }
                </div>

                <div className={styles.home__content__menu}>
                    <MenuButton icon={<Gear size={16} color='#ffffff'/>} title="home.menu.settings" variant="light-brown" href='#'/>
                    <MenuButton icon={<UserCircle size={16} color='#ffffff'/>} title="home.menu.moderationtools" variant="light-brown" href='/moderation-tools'/>
                    <MenuButton icon={<Sticker size={16} color='#ffffff'/>} title="home.menu.posts" variant="light-brown" href='#'/>

                    <div className={styles.home__content__menu__bottom}>
                        <MenuButton icon={<Image size={16} color='#ffffff'/>} title="home.menu.board" variant="brown" href='#'/>
                        <MenuButton icon={<Star size={16} color='#ffffff'/>} title="home.menu.help" variant="brown" href='#'/>
                    </div>
                </div>

            </main>
        </>
    )
}