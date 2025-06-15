import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div><Hero /></div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
