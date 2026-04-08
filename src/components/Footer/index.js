import { navLinks } from '@/constant/navLinks'
import { STLogo } from '@/icons/STLogo'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="px-4 py-6 md:px-4 md:py-6 shadow-md dark:border-t-gray-800 flex flex-col md:flex-row gap-2 md:gap-8 items-center">
                <div className="flex basis-1/3 items-center">
                    <div ><STLogo /></div>
                    <div className='text-xl font-black font-mono text-[#FF6464] '>SUDEEP TEJA</div>
                </div>
                <div className='basis-1/3'>
                    {navLinks.map((item, idx) => (
                        <div key={idx}>
                            <Link href={item.link} className=''>{item.name}</Link>
                        </div>
                    ))}
                </div>
                <div>
                    <div>Email: pandipatitejs@gmail.com</div>
                    <div>GitHub: <Link href='https://github.com/psudeepteja' target="_blank" rel="noopener noreferrer" className='text-blue-600/100 underline '>psudeepteja</Link></div>
                </div>
            </div>
            <div className='text-center text-sm text-gray-700 py-2 dark:text-[#fff]'>Copyright © {new Date().getFullYear()} Sudeep Teja.</div>
        </>
    )
}
