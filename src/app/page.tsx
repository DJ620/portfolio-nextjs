import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen mx-auto">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <Landing />
      <div className="w-screen h-screen mt-10 -skew-y-6 bg-blue-600">
      </div>
    </main>
  );
}
