//when the user clicks join now it'll take them to this page

"use client";

import {useState} from "react";
import TopBar from "../../components/TopBar_now"
import InputField from "@/app/components/ui/InputField";
import { RegisterErrors } from "@/app/types/register";


export default function RegisterPage() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<RegisterErrors>({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newError: RegisterErrors = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        };

        if(!firstName.trim()) {
            newError.firstName="First name is required";
        }
        if(!lastName.trim()) {
            newError.lastName="Last name is required";
        }
        if(!email.trim()) {
            newError.email="Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)){
            newError.email="Invalid email. Try Again";
        }
        if(!password){
            newError.password="Password is required";
        } else if (password.length < 8){
            newError.password="Password must be at least 8 characters";
        }
        if(!confirmPassword){
            newError.confirmPassword="Must confirm the password";
        } else if(password != confirmPassword){
            newError.confirmPassword="Passwords do not match"
        }

        const hasError = Object.values(newError).some(
            (errorMessage) => errorMessage !== ""
        );

        if (hasError){
            setError(newError);
            return;
        }
        setError(newError);

        console.log("Form is valid")
    }

    return (
        <div className="min-h-screen bg-[#000000] relative flex flex-col items-center">
            <TopBar/>
            <h1 className="flex justify-center pt-20 text-6xl text-white text-center">Register Now</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-1 mt-10">
                <label className="text-white text-3xl">First Name</label>
                <InputField
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) =>setFirstName(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    error={error.firstName}
                    ></InputField>

                <label className="text-white text-3xl">Last Name</label>
                <InputField
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    error={error.lastName}
                    ></InputField>
       

                <label className="text-white text-3xl">Email</label>
                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    error={error.email}
                    ></InputField>
           
                <label className="text-white text-3xl">Password</label>
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    error={error.password}
                ></InputField>

                <label className="text-white text-3xl">Confirm Password</label>
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-100 mx-auto"
                    required
                    error={error.confirmPassword}
                ></InputField>

                <button type = "submit" 
                    className ={`
                    mt-6 px-2 py-2 rounded-md bg-brand
                    text-white border-2 border-green-500
                    hover:border-green-500 active:scale-95 
                    transition-all duration-150 active:bg-green-600
                    `}>
                    Join Now
                </button>
            </form>
        </div>
    );
}