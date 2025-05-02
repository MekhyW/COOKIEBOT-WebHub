"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { DropdownLangSelector } from '../ui/menus/Languages';
import { backOut, motion } from 'framer-motion';
import UserMenu from '../ui/menus/User';

function Navbar() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className='flex items-center justify-center fixed top-0 left-0 w-full z-50'>
            <motion.div className='relative w-full'
                initial={{ opacity: 0, translateY: -64 }}
                animate={{ opacity: 1 , translateY: 0}}
                transition={{ delay: 0.5, duration: 1, ease: backOut }}
            >
                <div className={clsx('flex items-center justify-center top-0 left-0 w-full transition-all duration-300 h-20' , {
                    'bg-transparent': isTop,
                    'bg-surface/80': !isTop,
                    'backdrop-blur-md': !isTop,
                    'shadow-lg': !isTop
                })}></div>
                <div className="absolute top-0 flex flex-row items-center h-full px-6 py-2 pr-4 w-full gap-2">
                    <div className=''>
                        <Link href={"/"} prefetch={false}>
                            <span className=' block h-full'> <img src="/cookiebot_avatar.jpeg" className="h-12 w-12 rounded-sm"></img> </span>
                        </Link>
                    </div>
                    <span className='flex flex-grow'></span>
                    <nav className='flex sm:flex-row flex-col sm:text-base text-sm'>
                        <a href="/privacy" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Privacy</a>
                        <a href="https://t.me/cookiebotupdates" className="text-zinc-600 hover:text-yellow-500 font-bold mr-4">Development</a>
                        <a href="https://github.com/MekhyW/COOKIEBOT-Telegram-Group-Bot" className="text-zinc-600 hover:text-yellow-500 font-bold">Github</a>
                    </nav>
                    <span className='flex flex-grow'></span>
                    <div className="sm:hidden">
                        <UserMenu type="only-icon"/>
                    </div>
                    <div className="hidden sm:flex">
                        <UserMenu type="secondary"/>
                    </div>
                    <DropdownLangSelector type='only-icon'/>
                </div>
            </motion.div>
            
        </nav>
    );
}

export default Navbar;