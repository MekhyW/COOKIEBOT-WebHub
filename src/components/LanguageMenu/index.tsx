import { Cell, Divider, Radio } from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';
import styles from './LanguageMenu.module.scss';
import { useWebhubContext } from '../../context/WebhubContext';

export function LanguageMenu() {

    
    const context = useWebhubContext();

    const handleLanguage = (e:any) =>{
        context.setLanguage(e.target.value);
    }
    return (
        <div className={styles.language}>
            <ul className={styles.language__list}>
                <li>
                    <Cell>Languages</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "en"} onChange={(e)=>handleLanguage(e)} value="en"/>}>English</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "pt-BR"} onChange={(e)=>handleLanguage(e)} value="pt-BR"/>}>Português</Cell>
                    <Divider/>
                </li>

                <li>
                    <Cell Component="label" interactiveAnimation="opacity" after={<Radio name='language' defaultChecked={context.language === "es"} onChange={(e)=>handleLanguage(e)} value="es"/>}>Español</Cell>
                </li>


            </ul>
        </div>
    )
}