import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Landing from "@/components/Landing";
import Nav from "@/components/Header/Nav";
import Projects from "@/components/Projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen mx-auto text-lg bg-white text-neutral-800">
      <div className="relative pt-16 mx-auto bg-white">
        <div>
          <div className="fixed top-0 z-10 w-full">
            <Header />
          </div>
          <Landing />
        </div>
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
