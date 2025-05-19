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
                    <h1 className="text-2xl text-black">Em desenvolvimento!</h1>
                    <a href="/">
                        <button className="primary">
                            Voltar para a Homepage
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
}