import { data } from "@/constant/text";
import Image from "next/image";

export default function About() {
    return (
        <div className="px-4 py-16 md:px-20 md:py-24 bg-gray-50">
             <div className='text-center '>
            <span className="bg-gray-200 px-4 py-1 inline rounded-xl">About Me</span>
            </div>
        <div className="grid md:grid-cols-2 justify-center gap-4 mt-6 md:mt-12">
            <div className="flex justify-center">
                <Image src='/sudeep.jpg' height={280} width={240} alt="image" />
                </div>
            <div className="text-center">
                <p>{data.aboutMeText1}</p>
                <br/>
                <p>{data.aboutMeText2}</p>
                <br />
                <p>{data.aboutMeText3}</p>
            </div>
        </div>
        </div>
    )
}
