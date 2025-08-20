"use client"
import { data } from "@/constant/text";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";

export default function About() {
    // const { t } = useTranslation();
    return (
        <div className="px-4 py-6 md:px-4 md:py-16 ">
            <div className='text-center '>
                <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">About Me</span>
            </div>
            <div className="grid md:grid-cols-2 justify-center gap-4 mt-6 md:mt-12">
                <div className="flex justify-center">
                    <img src='/sudeep_3.jpeg' height="240" width="340" alt="image" />
                </div>
                <div className="text-center">
                    {/* <p>{t("aboutMeText1")}</p> */}
                    <p>I am a web developer with a passion for creating responsive and user-friendly websites and web applications. I specialize in using modern technologies like React, Next.js, and Tailwind CSS to bring ideas to life on the web.</p>
                    <br />
                    <p>I prioritize user experience, ensuring websites are intuitive and accessible. Proficient in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Committed to staying up-to-date with the latest industry trends and technologies.</p>
                    <br />
                    <p>Outside of coding, I enjoy exploring new technologies, and reading about advancements in web development. I am always looking for new challenges and opportunities to grow my skills and contribute to exciting projects.</p>
                </div>
            </div>
        </div>
    )
}
