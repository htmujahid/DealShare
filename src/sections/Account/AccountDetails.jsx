import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@/components/Form";
import { updateUser, useCurrentUser } from "@/lib/app/user";
import { toast } from "react-hot-toast";
function AccountDetails() {
  const [loading, setLoading] = useState(false);
  const { user } = useCurrentUser();

  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleUserUpdate = async () => {
    try {
      setLoading(true);
      if (user) {
        await updateUser(user._id, {
          firstName: fNameRef.current.value,
          lastName: lNameRef.current.value,
          phone: phoneRef.current.value,
        });
      }
      toast.success("Account updated successfully.");
      setLoading(false);
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      fNameRef.current.value = user.firstName;
      lNameRef.current.value = user.lastName;
      emailRef.current.value = user.email;
      phoneRef.current.value = user.phone ?? "";
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input inputRef={fNameRef} placeholder="First Name" className="w-full">
          First Name
        </Input>
        <Input inputRef={lNameRef} placeholder="Last Name" className="w-full">
          Last Name
        </Input>
        <Input
          inputRef={emailRef}
          placeholder="Email"
          type="email"
          className="w-full bg-[#b6b6b8]"
          disabled
        >
          Email
        </Input>
        <Input
          inputRef={phoneRef}
          placeholder="Phone"
          type="text"
          className="w-full"
        >
          Phone
        </Input>
      </div>
      <Button
        onClick={handleUserUpdate}
        className="w-[10%] justify-center "
        type="primary"
      >
        Save
      </Button>
    </div>
  );
}

export default AccountDetails;
