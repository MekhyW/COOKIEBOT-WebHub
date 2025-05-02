'use client' // Error components must be Client Components

import { Guara } from '@/components/icons/Nextfur';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const t = useTranslations("HTTPCodes");
    const tc = useTranslations("Commands");
    useEffect(() => {
        console.error(error)
    }, [error])

    return (

        <main className=" relative min-h-screen w-full flex flex-col overflow-hidden z-0">
            <span className="flex flex-col items-center justify-center w-full h-full text-[300px] md:text-[600px] text-error/20 absolute font-black break-keep top-auto left-auto right-auto bottom-auto">500</span>
            <main className="relative flex flex-col w-full items-center justify-center min-h-screen gap-2 text-center p-8">
                <div className=" relative h-52 w-52">
                    <div className="absolute h-52 w-52 bg-error/50 rounded-full blur-3xl" />
                    <div className="absolute h-52 w-52 text-error">
                        <Guara />
                    </div>
                </div>

                <h1 className=" text-error">500</h1>
                <p>
                    {t("500")}
                </p>

                <button className=" primary danger" onClick={
                    () => reset()
                }>
                    {tc("try_again")}
                    <ArrowPathIcon/>
                </button>

            </main>
        </main>
    )
}