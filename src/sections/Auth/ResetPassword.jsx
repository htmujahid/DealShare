import { Button, Input } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import Link from "next/link";
import React from "react";

function ResetPassword() {
  return (
    <AuthContainer>
      <div className="w-[350px] bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center h-full">
          <div>
            {/* <PrimaryLogo /> */}
            <h4 className="text-2xl font-bold text-center">Reset Password</h4>
            <p className="text-gray-500 text-center">Enter your new password</p>
          </div>
          <div className="flex flex-col w-full mt-4 gap-4">
            <Input type="password" placeholder="Password" className="w-full">
              Password
            </Input>
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full"
            >
              Confirm Password
            </Input>
            <Button variant="primary" className="w-full justify-center">
              Submit
            </Button>
          </div>{" "}
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

export default ResetPassword;
