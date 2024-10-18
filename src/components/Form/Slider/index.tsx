import { ReactNode, useState } from "react";

import styles from './Slider.module.scss';
import { Slider } from "@telegram-apps/telegram-ui";

interface FormSlider {
    label: ReactNode;
    description?:ReactNode;
    min: number;
    max: number;
    value: number;
    setSliderValue: (e:any) => void;
}

export function FormSlider(props:FormSlider) {

    return(
        <div className={styles.slider}>
            <div className={styles.slider__title}>
                <h3>{props.label}</h3>
                <h3>{props.value}</h3>
            </div>

            <Slider max={props.max} min={props.min} value={props.value} onChange={props.setSliderValue}/>

            <div className={styles.slider__description}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}