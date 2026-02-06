import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className = "text-3xl text-green-400">
        Kiwi - The Best Storage Solution You Can Find.
      </h1>
      <button className = "px-4 py-2 rounded-md bg-brand text-red-400">
        Upload A File
        </button>
    </div> 
  );
}
