import { PrimaryLogo } from "@/components/Application";
import { Button, Input } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import { userRoles } from "@/lib/app/user";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

function Login() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        redirect: false,
      });
      if (!response.ok) {
        throw new Error(response.error?.toString());
      }
      toast.success("You have been logged in successfully.");
    } catch (e) {
      toast.error(e?.toString(), { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      switch (session.user.role) {
        case userRoles.MANUFACTURER:
          router.replace("/manufacturer");
          break;
        case userRoles.CUSTOMER:
          router.replace("/");
          break;
        case userRoles.ADMIN:
          router.replace("/admin");
          break;
      }
    }
  }, [status, router]);

  return (
    <AuthContainer>
      <div className="w-[350px] bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center h-full">
          <div>
            <PrimaryLogo />
            <h4 className="text-2xl font-bold text-center">Welcome Back!</h4>
            <p className="text-center text-gray-500">Login to Your Account</p>
          </div>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col w-full gap-4 mt-4"
          >
            <Input
              inputRef={emailRef}
              type="email"
              placeholder="Email"
              className="w-full"
            >
              Email
            </Input>
            <Input
              inputRef={passwordRef}
              type="password"
              placeholder="Password"
              className="w-full"
            >
              Password
            </Input>
            <Button
              type="submit"
              variant="primary"
              className="justify-center w-full"
              loading={loading}
            >
              Login
            </Button>
          </form>
          <div className="flex justify-between mt-4">
            <div>
              <Link
                href="/auth/signup"
                className="text-sm text-primary-dark hover:opacity-70"
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
