import { Input } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import Link from "next/link";
import React from "react";

function VerifyEmail() {
    return (
        <AuthContainer>
            <div className="w-[350px] bg-white rounded-xl p-6">
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {/* <PrimaryLogo /> */}
                        <h4 className="text-2xl font-bold text-center">
                            Verify email
                        </h4>
                        <p className="text-gray-500 text-center">
                            We have sent you an email with a link to verify your
                            email address.
                        </p>
                    </div>
                    <div className="flex justify-center items-center text-sm mt-2">
                        Go back to&nbsp;
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

export default VerifyEmail;
