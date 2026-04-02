import React from 'react'
import NavBar from '../NavBar'
import { STLogo } from '@/icons/STLogo'

export default function Header() {
    return (
        <div className='px-4 md:px-12 flex items-center w-full shadow-md h-14 sticky bg-white z-10 inset-x-0 top-0 mb-4 dark:bg-gray-950 dark:text-[#fff]'>
            <div className="w-3/4 md:w-1/2 flex items-center">
                <div ><STLogo /></div>
                <div className='hidden md:block text-xl font-black font-mono text-[#FF6464] '>SUDEEP TEJA</div>
            </div>
            <div className="w-1/4 md:w-1/2	">
                <NavBar />
            </div>
        </div>
    )
}
