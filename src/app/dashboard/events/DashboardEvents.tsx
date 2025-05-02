import { useTranslations } from "next-intl"; 

export default function DashboardEventsPage() {
    const t = useTranslations("DashboardEventsPage")

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="rounded-xl bg-slate-100 bg-opacity-50 shadow-lg p-6 max-w-md w-full text-center">
                <div className="relative">
                    <div className="justify-between items-center p-2">
                        <div className='text-left'>
                            <a href='/dashboard' className='text-slate-800'>⬅️ {t('back')}</a>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        <h1 className="text-slate-800 text-4xl">{t('indev')}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}