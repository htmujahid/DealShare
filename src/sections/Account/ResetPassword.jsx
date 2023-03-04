import { Button, Input } from "@/components/Form";
import { updatePassword } from "@/lib/app/user";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

function ResetPassword() {
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      await updatePassword({
        currentPassword: currentPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
      });
      setLoading(false);
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      toast.success("Password updated successfully.");
    } catch (e) {
      setLoading(false);
      toast.error(e.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Current Password"
          className="w-full"
          divClassName="col-span-2"
          inputRef={currentPasswordRef}
          type="password"
        >
          Current Password
        </Input>
        <Input
          inputRef={newPasswordRef}
          placeholder="New Password"
          className="w-full"
          type="password"
        >
          New Password
        </Input>
        <Input
          inputRef={confirmPasswordRef}
          placeholder="Re-enter New Password"
          className="w-full"
          type="password"
        >
          Re-enter New Password
        </Input>
      </div>
      <Button
        onClick={handleResetPassword}
        variant="primary"
        className="w-fit mx-auto"
        loading={loading}
      >
        Save
      </Button>
    </div>
  );
}

export default ResetPassword;
