//when the user clicks join now it'll take them to this page

"use client";

import {useState} from "react";

export default function RegisterPage() {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !lastName || !email || !password || !confirmPassword || !error ) {
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
        <div>

            <h1>Test for Page</h1>

        </div>
    );
}