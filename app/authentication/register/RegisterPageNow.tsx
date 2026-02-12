//when the user clicks join now it'll take them to this page

"use client";

import {useState} from "react";
import TopBar from "../../components/TopBar_now"
import InputField from "@/app/components/ui/InputField";


export default function RegisterPage() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword || !error ) {
            setError("All fields must be filled");
            return
        }

        if (password !== confirmPassword) {
            setError("Password does not match. Try Again.")
            return
        }

        if ("" === email){
            setError("Please enter your email")
            return
        }

        if ("" === password){
            setError("Please enter eour password")
            return
        }

        if (password.length < 7){
            setError("Password Must be 8 characters or longer")
            return
        }

        setError(null);
    }

    return (
        <div className="min-h-screen bg-[#000000] relative">
            <TopBar/>
            <h1 className="flex justify-center pt-40 text-6xl text-white text-center">Register Now</h1>

            <form className="flex flex-col items-center gap-2 mt-16">
                <label className="text-white text-3xl">First Name</label>
                <InputField
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) =>setFirstName(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    ></InputField>
                </form>
                
            
        </div>
    );
}