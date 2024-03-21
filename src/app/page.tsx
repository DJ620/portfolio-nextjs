import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      {/* <div className="flex justify-end pr-16 z-10">
        <Nav />
      </div> */}
      <div className="h-screen -mt-28" />
      <div className="mt-20 h-screen w-screen bg-blue-600 -skew-y-6">
      </div>
      <div className="h-screen w-44 bg-blue-600"></div>
    </main>
  );
}
