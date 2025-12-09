"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // TODO: Make API request
        console.log({ name, email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Create Your Account
                </h1>

                <form onSubmit={handleSignup} className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Create a password"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full btn btn-primary cursor-pointer"
                            style={{ paddingInline: "1rem" }}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-300 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
