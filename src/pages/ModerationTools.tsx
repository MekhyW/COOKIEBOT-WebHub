import { FormattedMessage } from 'react-intl';
import { FormSlider } from '../components/Form/Slider';
import styles from '../styles/ModerationTools.module.scss';
import { useState } from 'react';

export default function ModerationTools(){

  const [captchaTime,setCaptchaTime] = useState(300);

  const handleCaptchaChange = (e:any)=>{
    setCaptchaTime(e);
  }
  return(
    <div className={styles.moderation}>
      <FormSlider 
        max={3000} 
        min={0} 
        label={<FormattedMessage id="moderation.captcha.title"/>} 
        description = {<FormattedMessage id='moderation.captcha.description'/>} 
        value={captchaTime}
        setSliderValue={handleCaptchaChange}/>
    </div>
  )
}