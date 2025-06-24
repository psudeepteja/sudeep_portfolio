"use client"
import React, { useEffect, useState } from 'react'
import { MaterialSymbolsMenu } from '@/icons/MenuIcon'
import { GgClose } from '@/icons/close'
import Theme from '../Theme'
import { navLinks } from '@/constant/navLinks'
import { useTranslation } from "react-i18next";
import "../../transulation/i18n"; // import i18n config

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [hasMounted, setHasMounted] = useState(false)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return (
        <>
            <div className='md:hidden flex justify-end items-center gap-4' >
                <div>
                    <Theme />
                </div>
                <div>
                    {hasMounted && i18n.language === 'en' && (
                        <button onClick={() => changeLanguage("te")}>తెలుగు</button>
                    )}
                    {hasMounted && i18n.language === 'te' && (
                        <button onClick={() => changeLanguage('en')}>English</button>
                    )}
                </div>
                {!isOpen ? (
                    <div onClick={handleClick}>
                        <MaterialSymbolsMenu />
                    </div>
                ) : (
                    <div className="flex justify-end" onClick={handleClick}><GgClose /></div>
                )}
            </div>
            {isOpen && (
                <div className='md:hidden flex justify-end flex-col absolute top-12 right-0 w-full my-2 bg-white dark:bg-gray-800 px-4 py-2 shadow-xl'>
                    {navLinks?.map((item, idx) => (
                        <a key={idx} href={item.link} onClick={() => setIsOpen(false)}>{item.name}</a>
                    ))}
                </div>
            )}
            <div className='hidden md:flex md:justify-end items-center gap-4'>
                <Theme />
                {hasMounted && i18n.language === 'en' && (
                    <button onClick={() => changeLanguage("te")}>తెలుగు</button>
                )}
                {hasMounted && i18n.language === 'te' && (
                    <button onClick={() => changeLanguage('en')}>English</button>
                )}
                {navLinks.map((item, idx) => (
                    <a key={idx} href={item.link} className='hidden md:flex'>{item.name}</a>
                ))}
            </div>
        </>
    )
}
