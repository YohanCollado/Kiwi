//home page
import TopBar from "./components/TopBar_now"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] relative">
      <TopBar/>
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center pt-10">
      <h1 
        style={{
          fontSize: "4.0rem",
          color: "#6ef065ff",
          textAlign: "center"
        }}
      >
        Kiwi 
      </h1>

      <h1 
        style={{
          fontSize: "2.25rem",
          color: "white",
          textAlign: "center",
        }}
      >
        No Better Place For Storage
      </h1>

      <Link href="/authentication/register">
      <button className ={`
                          mt-6 px-4 py-2 rounded-md bg-brand
                          text-white border-2 border-transparent 
                          hover:border-green-500 active:scale-95 
                          transition-all duration-150 active:bg-green-600
                          `}
                          >
                        Join Now
      </button>
      </Link>
      </div> 
    </div>
  );
}
