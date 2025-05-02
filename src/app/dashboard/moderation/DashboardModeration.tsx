'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Slider } from "../../../components/fx/Slider";
import { CounterClockiseIcon } from "../../../components/icons/Icons";

export default function DashboardModeration() {
    const t = useTranslations("DashboardModeration")

    const [captcha, setCaptcha] = useState(30);
    const [stickerSpam, setstickerSpam] = useState(5);
    const [timeout, settimeout] = useState(60);

    return (
        <main className="bg-main-dark bg-cover min-h-screen flex items-center justify-center">
        <div className="rounded-xl shadow-lg bg-slate-100 bg-opacity-40 p-6 max-w-md w-full text-center">
            <div className="justify-between items-center p-2">
                <div className='text-left'>
                    <a href='/dashboard' className='text-white'>⬅️ {t('back')}</a>
                </div>
                <a className="text-white font-bold">{t('title')}</a>
            </div>
            <div className="relative text-center">
                <div className="bg-white rounded-md mt-2 mr-2 ml-2 px-2 py-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black">{t('captchaTitle')}</label>
                        <span className="text-sm text-black">30-300(s)</span>
                    </div>
                    <Slider
                        min={30}
                        max={300}
                        value={captcha}
                        onChange={setCaptcha}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1">{t('captchaSubtitle')}</p>
                </div>
                <div className="bg-white rounded-md mt-2 mr-2 ml-2 px-2 py-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black">{t('stickerTitle')}</label>
                        <span className="text-sm text-black">5-500(s)</span>
                    </div>
                    <Slider
                        min={5}
                        max={500}
                        value={stickerSpam}
                        onChange={setstickerSpam}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1">{t('stickerSubtitle')}</p>
                </div>
                <div className="bg-white rounded-md mt-2 mr-2 ml-2 px-2 py-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-black">{t('timeoutTitle')}</label>
                        <span className="text-sm text-black">60-900(s)</span>
                    </div>
                    <Slider
                        min={60}
                        max={900}
                        value={timeout}
                        onChange={settimeout}
                        label=" "
                    />
                    <p className="text-xs text-black mt-1">{t('timeoutSubtitle')}</p>
                </div>
                <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-amber-500 text-black py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition">
                            <span className="mr-2"><CounterClockiseIcon  /></span> {t('redefine')}
                        </button>
                </div>
            </div>
        </div>
    </main>
    )
}