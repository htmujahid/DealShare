import { PrimaryLogo } from "@/components/Application";
import { Button, Input } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import Link from "next/link";
import React from "react";

function Login() {
    return (
        <AuthContainer>
            <div className="w-[350px] bg-white rounded-xl p-6">
                <div className="flex flex-col justify-center h-full">
                    <div>
                        <PrimaryLogo />
                        <h4 className="text-2xl font-bold text-center">
                            Welcome Back!
                        </h4>
                        <p className="text-gray-500 text-center">
                            Login to Your Account
                        </p>
                    </div>
                    <div className="flex flex-col w-full mt-4 gap-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full"
                        >
                            Email
                        </Input>
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full"
                        >
                            Password
                        </Input>
                        <Button
                            type="primary"
                            className="w-full justify-center"
                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div>
                            <Link
                                href="/auth/signup"
                                className="text-primary-dark text-sm hover:opacity-70"
                            >
                                Create Account
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm hover:opacity-70 "
                            >
                                Forgot Password
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
}

export default Login;
