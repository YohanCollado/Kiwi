"use client";
import {useState} from "react";
import TopBar from "../../components/TopBar_now"

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

      return (
        <div className="min-h-screen bg-[#000000] relative">
            <TopBar/>

        </div>
    );
}
