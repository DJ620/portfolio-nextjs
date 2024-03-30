import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Landing from "@/components/Hero/Landing";
import Nav from "@/components/Header/Nav";
import Projects from "@/components/Projects/Projects";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-screen mx-auto text-lg bg-white text-neutral-800">
      <div className="sticky top-0 z-10 w-full">
            <Header />
          </div>
      <div className="relative mx-auto bg-white">
        <div>
          <Landing />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
