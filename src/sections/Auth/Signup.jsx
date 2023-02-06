import { PrimaryLogo } from "@/components/Application";
import { Button, Input, Select } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import Link from "next/link";
import React from "react";

function Signup() {
    return (
        <AuthContainer>
            <div className="w-[350px] bg-white rounded-xl p-6">
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {/* <PrimaryLogo /> */}
                        <h4 className="text-2xl font-bold text-center">
                            Get Started
                        </h4>
                        <p className="text-gray-500 text-center">
                            Create your free account
                        </p>
                    </div>
                    <div className="flex flex-col w-full mt-4 gap-4">
                        <Input placeholder="Full Name" className="w-full">
                            Full Name
                        </Input>
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
                        <Select
                            placeholder="Sign up as"
                            className="w-full"
                            options={[
                                { label: "Customer", value: "customer" },
                                {
                                    label: "Manufacturer",
                                    value: "manufacturer",
                                },
                            ]}
                        >
                            Sign up as
                        </Select>

                        <Button
                            type="primary"
                            className="w-full justify-center"
                        >
                            Signup
                        </Button>
                    </div>
                    <div className="flex justify-center items-center text-sm mt-4">
                        Already have an account? &nbsp;
                        <Link
                            href="/auth/login"
                            className="text-primary-dark hover:opacity-70"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
}

export default Signup;
