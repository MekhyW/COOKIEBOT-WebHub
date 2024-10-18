
import { ReactNode } from "react";

import styles from './MenuButton.module.scss';
import { FormattedMessage } from "react-intl";

interface MenuButtonProps{
    icon:ReactNode,
    title:string,
    href:string,
    variant: 'brown'|'light-brown';
}
export function MenuButton(props:MenuButtonProps){


    return(
        <a href={props.href} className={`${styles[props.variant]} ${styles.button}`}>
            {props.icon} <FormattedMessage id={props.title}/>
        </a>
    )
}