"use client"

import React from "react";
import Slider from "react-slick";
import './styles.css'
import { useTranslation } from "react-i18next";

export default function Projects() {
  const webPages = [
    { title: "ShowTime App", url: "https://show-time-app.vercel.app/movies/nellore", img: "/ShowTime.png" },
    { title: "Russell And Bromley", url: "https://www.russellandbromley.co.uk", img: "/Russell_and_Bromley_UK.png" },
    { title: "Liverpool Suburbia", url: "https://www.suburbia.com.mx/tienda/home", img: "/Suburbia.jpg" },
    { title: "ECart App", url: "https://e-cart-app-beige.vercel.app", img: "/ECart1.png" },
    { title: "Recipie App", url: "https://vgts-task-green.vercel.app", img: "/Recipie.png" },
    // {title: "Bill Buddy App", url:"https://bill-buddy-app.vercel.app"},
  ]
  const {t}= useTranslation();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="px-4 py-6 md:px-4 md:py-16">
      <div className='text-center pb-8'>
        <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">{t("projectTitle")}</span>
      </div>
      <div>
        <p className="pt-2 pb-6">{t("projectDes")}</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {webPages.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl shadow-md inset-shadow-[#FF6464] hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden border dark:border-gray-900 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ""}`}
            >
              {/* <img
              src={item.img}
              alt={item.title}
              className="w-full h-24 object-cover"
            /> */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  )
}
