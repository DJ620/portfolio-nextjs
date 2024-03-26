import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen mx-auto bg-slate-100">
      <div className="max-w-[1524px] mx-auto shadow-2xl bg-white">
        <div className="min-h-screen">
          <div className="sticky top-0 z-10">
            <Header />
          </div>
          <Landing />
        </div>
        <div className="w-full h-screen" />
      </div>
    </main>
  );
}
