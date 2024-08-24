import { Avatar } from '@telegram-apps/telegram-ui';
import styles from '../styles/Home.module.scss';

import cookieAvatar from '../assets/cookiebot_avatar.jpeg';

import { FormattedMessage } from "react-intl";
import { useState } from 'react';
import { LanguageMenu } from '../components/LanguageMenu';
import { Globe } from '@phosphor-icons/react';

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

                    {showLanguageConfig &&
                        <LanguageMenu />
                    }
                </div>

            </main>
        </>
    )
}