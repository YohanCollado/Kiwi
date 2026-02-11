import Link from "next/link"
export default function TopBar(){
    return (
        <div className="w-full flex justify-between items-center px-6 py-4 bg-[#000000] fixed top-0">
            <h1 className="text-3xl text-[#6ef065ff]">Kiwi</h1>

            <Link href="/authentication/login">
            <button className={`
                            px-4 py-2 rounded-md bg-brand
                            text-white border-2 border-transparent
                            hover:border-green-500 active:scale-95
                            transition-all duration-150 active:bg-green-600
                            `}
                            >
                            Log In
            </button>
            </Link>
        </div>
    );
}