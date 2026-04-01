"use client"

import React from "react";
import Slider from "react-slick";
import './styles.css'

export default function Projects() {
  const webPages = [
    { title: "ShowTime App", url: "https://show-time-app.vercel.app/movies/nellore", img: "/showTime.png" },
    { title: "Russell And Bromley", url: "https://www.russellandbromley.co.uk", img: "/RandB.png" },
    { title: "Liverpool Suburbia", url: "https://www.suburbia.com.mx/tienda/home", img: "/subarbia.png" },
    { title: "ECart App", url: "https://e-cart-app-beige.vercel.app", img: "/ecart.png" },
    { title: "Recipie App", url: "https://vgts-task-green.vercel.app", img: "/receipie.png" },
    // {title: "Bill Buddy App", url:"https://bill-buddy-app.vercel.app"},
  ]

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
        <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">Projects</span>
      </div>
      <div>
        <p className="pt-2 pb-6">Here are some of the projects I’ve worked on, showcasing my skills in frontend development, and building responsive, user-centric web applications. Each project highlights a different aspect of my technical abilities, from integrating APIs to implementing scalable component-based architectures.</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {webPages.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl shadow-md inset-shadow-[#FF6464] hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden border dark:border-gray-900 : ""}`}
            >
              <div className="p-8 flex flex-col items-center justify-center h-32">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  )
}
