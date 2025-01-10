import { useState } from 'react';
import { Cell, Divider, Radio } from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';
import styles from './LanguageMenu.module.scss';
import { useWebhubContext } from '../../context/WebhubContext';

export function LanguageMenu() {
    const [showLanguageConfig, setShowLanguageConfig] = useState(true);

    const context = useWebhubContext();

    const handleLanguage = (e: any) => {
        context.setLanguage(e.target.value);
    }

    if (!showLanguageConfig) {
        return null; 
    }

    return (
        <div className={styles.language}>
            <ul className={styles.language__list}>
                <li>
                    <Cell onClick={() => setShowLanguageConfig(false)}>Close</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "en"} onChange={handleLanguage} value="en"/>}>English</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "pt-BR"} onChange={handleLanguage} value="pt-BR"/>}>Português</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "es"} onChange={handleLanguage} value="es"/>}>Español</Cell>
                </li>
            </ul>
        </div>
    );
}
