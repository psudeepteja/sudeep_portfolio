import { data } from "@/constant/text";
// import Image from "next/image";

export default function About() {
    return (
        <div className="px-4 py-6 md:px-4 md:py-16 ">
             <div className='text-center '>
            <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">About Me</span>
            </div>
        <div className="grid md:grid-cols-2 justify-center gap-4 mt-6 md:mt-12">
            <div className="flex justify-center">
                {/* <img src='/sudeep_3.jpeg' height="240" width="340" alt="image" /> */}
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
