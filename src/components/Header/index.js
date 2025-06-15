import React from 'react'
import NavBar from '../NavBar'
import { MaterialSymbolsElectricBoltRounded } from '@/icons/Bolt'

export default function Header() {
    return (
        <div className='flex items-center w-full h-9'>
            <div className="w-3/4 md:w-1/2 flex">
                <div ><MaterialSymbolsElectricBoltRounded /></div>
                <div className='text-xl font-extrabold font-mono text-orange-600'>udeep</div>
            </div>
            <div className="w-1/4 md:w-1/2	">
                <NavBar />
            </div>
        </div>
    )
}
