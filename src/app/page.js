import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionData = [
    {link:"", component: <Hero /> },
    {link:"about", component: <About /> },
    {link:"skills", component: <Skills /> },
    {link:"projects", component: <Projects /> },
    {link:"contact", component: <Footer /> },
  ]
  
  return (
    <>
      {sectionData.map((item,index)=>(
        <div key={index} id={item?.link} className={index % 2 ===0 ? 'bg-gray-50 dark:bg-gray-900' : "" }>
        {item.component}
      </div> 
      ))}
    </>
  );
}
