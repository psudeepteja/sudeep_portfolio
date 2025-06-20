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

    return (
        <>
            <div className='md:hidden flex justify-end items-center' onClick={handleClick}>
                <Theme />
                {!isOpen ? (
                    <MaterialSymbolsMenu />
                ):(
              <div className="flex justify-end" onClick={handleClick}><GgClose /></div>
                )}
            </div>
            {isOpen && (
                <div className='md:hidden flex justify-end flex-col absolute top-12 right-0 w-full my-2 bg-white dark:bg-gray-800 px-4 py-2 shadow-xl'>
                    <a href="#about" >About</a>
                    <a href="#skills" >Skills</a>
                    <a href="#projects" >Projects</a>
                    <a href="#contact" >Contact</a>
                </div>
            )}
            <div className='hidden md:flex md:justify-end items-center gap-4'>
                <Theme />
                <a href="#about" className='hidden md:flex'>About</a>
                <a href="#skills" className='hidden md:flex'>Skills</a>
                 <a href="#projects" className='hidden md:flex'>Projects</a>
                <a href="#contact" className='hidden md:flex'>Contact</a>
            </div>
        </>
    )
}
