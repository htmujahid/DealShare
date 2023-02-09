import { Button, Input, Select } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import { registerUser } from "@/lib/app/user";
import Link from "next/link";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function Signup() {
  const [loading, setLoading] = useState(false);

  const fNameRef = useRef();
  const lNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      await registerUser({
        firstName: fNameRef.current.value,
        lastName: lNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: roleRef.current.value,
      });
      toast.success("User created successfully.");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error(e.message);
    }
  };

  return (
    <AuthContainer>
      <div className="w-[500px] bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center h-full">
          <div>
            {/* <PrimaryLogo /> */}
            <h4 className="text-2xl font-bold text-center">Get Started</h4>
            <p className="text-gray-500 text-center">
              Create your free account
            </p>
          </div>
          <div className="flex flex-col w-full mt-4 gap-4">
            <Input
              inputRef={fNameRef}
              placeholder="First Name"
              className="w-full"
            >
              First Name
            </Input>
            <Input
              inputRef={lNameRef}
              placeholder="Last Name"
              className="w-full"
            >
              Last Name
            </Input>
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
            <Select
              selectRef={roleRef}
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
              onClick={handleSignUp}
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
