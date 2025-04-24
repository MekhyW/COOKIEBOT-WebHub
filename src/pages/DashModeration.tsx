import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Slider } from "../components/Slider/Slider.tsx";
import { ArrowCounterClockwise } from '@phosphor-icons/react';

export default function DashModeration() {
    const [captcha, setCaptcha] = useState(30);
    const [stickerSpam, setstickerSpam] = useState(5);
    const [timeout, settimeout] = useState(60);

    return (
    <main className="bg-[url('./assets/bg1.jpg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <div className="justify-between items-center p-2">
                <div className='text-left'>
                    <a href='/dashboard/home' className='text-white'>⬅️ <FormattedMessage id="mod.back" /></a>
                </div>
                <a className="text-white font-bold"><FormattedMessage id="mod.title" /></a>
            </div>
            <div className="relative text-center">
                <div className="mt-2 mr-2 ml-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black"><FormattedMessage id="mod.captchaTitle" /></label>
                        <span className="text-xs text-black">30-300(s)</span>
                    </div>
                    <Slider
                        min={30}
                        max={300}
                        value={captcha}
                        onChange={setCaptcha}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1"><FormattedMessage id="mod.captchaSubtitle" /></p>
                </div>
                <div className="mt-2 mr-2 ml-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black"><FormattedMessage id="mod.stickerTitle" /></label>
                        <span className="text-xs text-black">5-500(s)</span>
                    </div>
                    <Slider
                        min={5}
                        max={500}
                        value={stickerSpam}
                        onChange={setstickerSpam}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1"><FormattedMessage id="mod.stickerSubtitle" /></p>
                </div>
                <div className="mt-2 mr-2 ml-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black"><FormattedMessage id="mod.timeoutTitle" /></label>
                        <span className="text-xs text-black">60-900(s)</span>
                    </div>
                    <Slider
                        min={60}
                        max={900}
                        value={timeout}
                        onChange={settimeout}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1"><FormattedMessage id="mod.timeoutSubtitle" /></p>
                </div>
                <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-amber-500 text-black py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition">
                            <span className="mr-2"><ArrowCounterClockwise size={20} color='#000' /></span> <FormattedMessage id="general.redefine" />
                        </button>
                </div>
            </div>
        </div>
    </main>
    );
}