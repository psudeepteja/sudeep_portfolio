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
                <div className='md:hidden flex justify-end flex-col absolute top-2 right-4 my-2'>
                    <div className="flex justify-end m-2" onClick={handleClick}><GgClose /></div>
                    <div >About</div>
                    <div >Skills</div>
                    <div >Contact</div>
                </div>
            )}
            <div className='hidden md:flex md:justify-around'>
                <span className='hidden md:flex'>About</span>
                <span className='hidden md:flex'>Skills</span>
                <span className='hidden md:flex'>Contact</span>
            </div>
        </>
    )
}
