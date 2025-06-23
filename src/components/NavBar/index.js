"use client"
import React, { useState } from 'react'
import { MaterialSymbolsMenu } from '@/icons/MenuIcon'
import { GgClose } from '@/icons/close'
import Theme from '../Theme'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ]

    return (
        <>
            <div className='md:hidden flex justify-end items-center' >
                <Theme />
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
                    {navLinks.map((item, idx) => (
                        <a key={idx} href={item.link} onClick={()=>setIsOpen(false)}>{item.name}</a>
                    ))}
                </div>
            )}
            <div className='hidden md:flex md:justify-end items-center gap-4'>
                <Theme />
                {navLinks.map((item, idx) => (
                    <a key={idx} href={item.link} className='hidden md:flex' >{item.name}</a>
                ))}
            </div>
        </>
    )
}
