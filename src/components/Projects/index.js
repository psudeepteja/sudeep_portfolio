import { skills } from '@/constant/skills'
import Image from 'next/image'

export default function Projects() {
    const webPages = [
        {title: "ShowTime App", url:"https://show-time-app.vercel.app/movies/nellore", img:"/ShowTime.png"},
        {title: "Russell And Bromley", url:"https://www.russellandbromley.co.uk", img:"/Russell_and_Bromley_UK.png"},
        {title: "Liverpool Suburbia", url:"https://www.suburbia.com.mx/tienda/home", img:"/Suburbia.jpg"},
        {title: "ECart App", url:"https://e-cart-app-beige.vercel.app", img:"/Ecart1.png"},

        {title: "Recipie App", url:"https://vgts-task-green.vercel.app", img:"/Recipie.png"},
        // {title: "Bill Buddy App", url:"https://bill-buddy-app.vercel.app"},

    ]
    return (
        <div className="px-4 py-6 md:px-4 md:py-16">
            <div className='text-center pb-8'>
            <span className="bg-[#FF6464] text-[#fff] px-4 py-1 inline rounded-xl">Projects</span>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {webPages.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-lg inset-shadow-[#FF6464] hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden border"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-24 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
 
        </div>
    )
}
