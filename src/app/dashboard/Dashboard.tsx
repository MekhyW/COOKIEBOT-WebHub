'use client';

import { useTranslations } from "next-intl"; 
import { MailIcon, CogIcon, ShieldIcon, SpeakerphoneIcon, TextIcon, CalendarIcon, AcademicIcon } from "../../components/icons/Icons";
import { useGetChatCount } from '../../lib/hooks/useGetChatCount';

export default function DashboardHome() {
    const t = useTranslations("DashboardHome")
    const { data: chatCount, isLoading, isError } = useGetChatCount();

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="rounded-xl bg-slate-100 bg-opacity-50 shadow-lg p-6 max-w-md w-full text-center">
                <div className="relative">
                    <div className="w-20 h-20 mx-auto">
                        <img src='./cookiebot_avatar.jpeg' className="rounded-full"></img>
                    </div>
                    <h1 className="text-xl font-bold mt-4 text-black">{t('welcome')}</h1>
                    <h3 className="text-black">
                        
                    </h3>
                    <h3 className="text-black text-sm">
                        {t('groupcount', {
                            count: isLoading ? '...' : isError ? 'N/A' : chatCount?.number_chats.toString() || '0'
                        })}
                    </h3>
                    <h3 className="text-black text-sm">{t('inviteMeText')}</h3>

                    <button className="primary w-full text-white px-4 py-2 rounded-md mt-4 font-medium flex justify-center mx-auto">
                        <a href='https://t.me/CookieMWbot?startgroup=new'>
                            <span className="mr-2">+</span> {t('inviteMeButton')}
                        </a>
                    </button>

                    <div className="mt-6 space-y-3">
                        <a href='/dashboard/general' className="shadow-sm w-full bg-orange-100 text-amber-800 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><CogIcon /></div>
                            {t('generalconfig')}
                        </a>
                        <a href='/dashboard/moderation' className="shadow-sm w-full bg-orange-100 text-amber-800 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><ShieldIcon /></div>
                            {t('moderationconfig')}
                        </a>
                        <a href='/dashboard/posts' className="shadow-sm w-full bg-orange-100 text-amber-800 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><TextIcon /></div>
                            {t('postsconfig')}
                        </a>
                        <a href='https://t.me/CookiebotPostmail' className="shadow-sm w-full bg-yellow-100 text-yellow-700 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><MailIcon /></div>
                            {t('mailconfig')}
                        </a>
                        <a href='/dashboard/events' className="shadow-sm w-full bg-yellow-200 text-black py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><CalendarIcon /></div>
                            {t('events')}
                        </a>
                        <a href='https://t.me/+mX6W3tGXPew2OTIx' className="shadow-sm w-full bg-blue-100 text-blue-700 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><AcademicIcon /></div>
                            {t('testgroup')}
                        </a>
                        <a href='https://t.me/cookiebotupdates' className="shadow-sm w-full bg-blue-100 text-blue-700 py-2 rounded-md flex items-center justify-center px-4">
                            <div className='mr-4'><SpeakerphoneIcon /></div>
                            {t('updateschannel')}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}