"use client"
import React, { useState } from 'react'
import { MaterialSymbolsMenu } from '@/icons/MenuIcon'
import { GgClose } from '@/icons/close'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='md:hidden flex justify-end' onClick={handleClick}>
                {!isOpen && (
                    <MaterialSymbolsMenu />
                )}
            </div>
            {isOpen && (
                <div className='md:hidden flex justify-end flex-col absolute top-2 right-4 my-2 bg-white px-4'>
                    <div className="flex justify-end m-2" onClick={handleClick}><GgClose /></div>
                    <a href="#about" >About</a>
                    <a href="#skills" >Skills</a>
                    <a href="#projects" >Projects</a>
                    <a href="#contact" >Contact</a>
                </div>
            )}
            <div className='hidden md:flex md:justify-end gap-4'>
                <a href="#about" className='hidden md:flex'>About</a>
                <a href="#skills" className='hidden md:flex'>Skills</a>
                 <a href="#projects" className='hidden md:flex'>Projects</a>
                <a href="#contact" className='hidden md:flex'>Contact</a>
            </div>
        </>
    )
}
