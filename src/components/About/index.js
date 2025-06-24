"use client"
import { data } from "@/constant/text";
import { useTranslation } from "react-i18next";
// import Image from "next/image";

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="px-4 py-6 md:px-4 md:py-16 ">
            <div className='text-center '>
                <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">{t("aboutMeTitle")}</span>
            </div>
            <div className="grid md:grid-cols-2 justify-center gap-4 mt-6 md:mt-12">
                <div className="flex justify-center">
                    <img src='/sudeep_3.jpeg' height="240" width="340" alt="image" />
                </div>
                <div className="text-center">
                    <p>{t("aboutMeText1")}</p>
                    <br />
                    <p>{t("aboutMeText2")}</p>
                    <br />
                    <p>{t("aboutMeText3")}</p>
                </div>
            </div>
        </div>
    )
}
