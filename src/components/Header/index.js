import React from 'react'
import NavBar from '../NavBar'
import { MaterialSymbolsElectricBoltRounded } from '@/icons/Bolt'

export default function Header() {
    return (
        <div className='flex items-center w-full border-b-2 border-b-[#FF6464] h-14 sticky bg-white z-10 inset-x-0 top-0 mb-4 dark:bg-gray-950 dark:text-[#fff]'>
            <div className="w-3/4 md:w-1/2 flex items-center">
                <div ><MaterialSymbolsElectricBoltRounded height="30px" width="30px" /></div>
                <div className='text-xl font-black font-mono text-[#FF6464]'>Sudeep</div>
            </div>
            <div className="w-1/4 md:w-1/2	">
                <NavBar />
            </div>
        </div>
    )
}
