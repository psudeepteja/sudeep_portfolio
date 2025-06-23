import { navLinks } from '@/constant/navLinks'
import { MaterialSymbolsElectricBoltRounded } from '@/icons/Bolt'

export default function Footer() {
    return (
        <>
            <div className="px-4 py-6 md:px-4 md:py-6 border-t dark:border-t-gray-800 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex basis-1/3">
                    <div ><MaterialSymbolsElectricBoltRounded height="30px" width="30px" /></div>
                    <div className='text-2xl font-black font-mono text-[#FF6464]'>Sudeep</div>
                </div>
                <div className='basis-1/3'>
                    {navLinks.map((item, idx) => (
                        <a key={idx} href={item.link} className='block' >{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>Email: pandipatitejs@gmail.com</div>
                </div>
            </div>
            <div className='text-center text-sm text-gray-700 pb-4 dark:text-[#fff]'>Copyright © 2025 Sudeep Teja.</div>
        </>
    )
}
