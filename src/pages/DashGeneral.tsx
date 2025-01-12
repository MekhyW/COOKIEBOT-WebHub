import { FormattedMessage } from "react-intl";
import { useState } from "react";

export default function DashGeneral() {
    const [welcome, setwelcome] = useState("");
    const [chatrules, setchatrules] = useState("");

    return (
        <main className="bg-[url('./assets/home_background.png')] min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <div className="justify-between items-center p-2">
                <div className='text-left'>
                    <a href='/dashboard/home' className='text-black font-bold'>⬅️ <FormattedMessage id="mod.back" /></a>
                </div>
            </div>
            <div className="relative text-center">
            <a className="text-black font-bold">General Settings</a>
                <div className="space-y-4">
                    <div className="mt-5">
                        <div className="w-fit bg-slate-300 rounded-md">
                            <label className="ml-2 mr-2 bg-slate-300 block text-sm font-semibold text-black mb-1">
                                <FormattedMessage id="general.welcome"/>
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
                                <FormattedMessage id="general.welcomeLabel" />
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="w-fit bg-slate-300 rounded-md">
                            <label className="ml-2 mr-2 bg-slate-300 block text-sm font-semibold text-black mb-1">
                                <FormattedMessage id="general.chatrules"/>
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
                                <FormattedMessage id="general.chatrulesLabel" />
                            </div>
                        )}
                        </div>
                    </div>

                    <div className='mt-6 space-y-4'>
                        <div className="flex items-center justify-between">
                            <label className='text-sm font-medium text-black'>
                                <FormattedMessage id="general.checkOptions1" />
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                <FormattedMessage id="general.checkOptions2" />
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                <FormattedMessage id="general.checkOptions3" />
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                <FormattedMessage id="general.checkOptions4" />
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-amber-500 text-black py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition">
                            <span className="mr-2">↩</span> <FormattedMessage id="general.redefine" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}