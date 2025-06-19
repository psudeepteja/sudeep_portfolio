import { skills } from '@/constant/skills'
import Image from 'next/image'

export default function Skills() {
    return (
        <div className="px-4 py-6 md:px-4 md:py-6">
        <div className="grid grid-col-3 justify-center gap-4">
            <div className='text-center'>
            <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">Skills</span>
            </div>
            <div>
            <p className="py-2">The skills, tools and technologies I am really good at:</p>
            </div>
            <div>
           
            </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 justify-center gap-8'>
                {skills.map((item)=>(
                    <div key={item.id} >
                        {/* <Image src={item?.icon} alt={item.name} width={64} height={64} /> */}
                        <div className='flex justify-center'>{item.icon}</div>
                        <p className='text-xs text-center'>{item.name}</p>

                    </div>
                ))

                }
            
            </div>
        </div>
    )
}
