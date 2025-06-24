"use client"
import Image from "next/image";
import { data } from '@/constant/text'
import { MaterialSymbolsLocationOn } from "@/icons/Location";
import { PhDotFill } from "@/icons/dot";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="px-4 py-6 flex flex-col md:flex-row-reverse gap-8 md:items-center">
            <div className="flex justify-center md:w-1/4	">
                <img src='/sudeep_2.jpeg' height="280" width="400" alt="image" />
            </div>
            <div className="md:w-3/4 flex flex-col gap-4">
                <p className="text-xl md:text-2xl font-bold text-center md:text-left">{t("prefix")} {data.name}</p>
                <p className="text-sm md:text-lg"> {t("profileDescription")}</p>
                <p className="flex gap-1"><span><MaterialSymbolsLocationOn /></span> <span>Nellore, India</span></p>
                <p className="flex gap-1"><span><PhDotFill /></span> <span>Available for new projects</span></p>
            </div>
        </div>
    )
}



