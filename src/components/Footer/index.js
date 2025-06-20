import { skills } from '@/constant/skills'
import { MaterialSymbolsElectricBoltRounded } from '@/icons/Bolt'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className="px-4 py-6 md:px-4 md:py-6 border-t flex flex-col md:flex-row gap-8 items-center">
                <div className="flex basis-1/3">
                    <div ><MaterialSymbolsElectricBoltRounded height="30px" width="30px" /></div>
                    <div className='text-2xl font-black font-mono text-[#FF6464]'>Sudeep</div>
                </div>
                <div className='basis-1/3'>
                    <a href="#about" className='block '>About</a>
                    <a href="#skills" className=' block'>Skills</a>
                    <a href="#projects" className='block '>Projects</a>
                    <a href="#contact" className='block '>Contact</a>
                </div>
                <div>
                    <div>Email: pandipatitejs@gmail.com</div>
                </div>
            </div>
            <div className='text-center text-sm text-gray-700 pb-4 dark:text-[#fff]'>Copyright © 2025 Sudeep Teja.</div>
        </>
    )
}
