'use client'

import { useTranslations } from "next-intl"; 
import { useState } from "react";
import { CounterClockiseIcon } from "../../../components/icons/Icons";

export default function DashboardGeneral() {
    const t = useTranslations("DashboardGeneral")
    const [welcome, setwelcome] = useState("");
    const [chatrules, setchatrules] = useState("");

    return (
        <main className="bg-main-dark bg-cover min-h-screen flex items-center justify-center">
            <div className="rounded-xl shadow-lg bg-slate-100 bg-opacity-40 p-6 max-w-md w-full">
            <div className="justify-between items-center p-2">
                <div className='text-left'>
                    <a href='/dashboard' className='text-white'>⬅️ {t('back')}</a>
                </div>
            </div>
            <a className="flex text-white font-bold items-center justify-center text-center">General Settings</a>
            <div className="relative text-left">
                <div className="space-y-4">
                    <div className="mt-5">
                        <div className="w-fit bg-orange-100 rounded-md">
                            <label className="ml-2 mr-2 bg-orange-100 block text-sm font-semibold text-black mb-1">
                                {t('welcome')}
                            </label>
                        </div>
                        <div className="relative w-full">
                        <textarea
                            className="w-full p-3 border border-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            rows={2}
                            value={welcome}
                            onChange={(e) => setwelcome(e.target.value)}
                        />
                        {!welcome && (
                            <div className="absolute top-3 left-3 text-gray-400 pointer-events-none text-sm">
                                {t('welcomeLabel')}
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="w-fit bg-orange-100 rounded-md">
                            <label className="ml-2 mr-2 bg-orange-100 block text-sm font-semibold text-black mb-1">
                                {t('chatRules')}
                            </label>
                        </div>
                        <div className="relative w-full">
                        <textarea
                            className="w-full p-3 border border-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            rows={2}
                            value={chatrules}
                            onChange={(e) => setchatrules(e.target.value)}
                        />
                        {!chatrules && (
                            <div className="absolute top-3 left-3 text-gray-400 pointer-events-none text-sm">
                                {t('chatRulesLabel')}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className='mt-6 space-y-4'>
                        <div className="w-full bg-white text-amber-800 py-2 rounded-sm flex items-center justify-between px-4">
                            <label className='text-sm font-medium text-black'>
                                {t('checkOptions1')}
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="w-full bg-white text-amber-800 py-2 rounded-sm flex items-center justify-between px-4">
                            <label className="text-sm font-medium text-black">
                                {t('checkOptions2')}
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="w-full bg-white text-amber-800 py-2 rounded-sm flex items-center justify-between px-4">
                            <label className="text-sm font-medium text-black">
                                {t('checkOptions3')}
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                        
                        <div className="w-full bg-white text-amber-800 py-2 rounded-sm flex items-center justify-between px-4">
                            <label className="text-sm font-medium text-black">
                                {t('checkOptions4')}
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-amber-500 text-black py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition">
                            <span className="mr-2"><CounterClockiseIcon /></span> {t('redefine')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}