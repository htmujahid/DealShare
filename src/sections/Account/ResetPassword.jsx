import { Button, Input } from "@/components/Form";
import React from "react";

function ResetPassword() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <Input
                    placeholder="Current Password"
                    className="w-full"
                    divClassName="col-span-2"
                >
                    Current Password
                </Input>
                <Input placeholder="New Password" className="w-full">
                    New Password
                </Input>
                <Input placeholder="Re-enter New Password" className="w-full">
                    Re-enter New Password
                </Input>
            </div>
            <Button type="primary" className="w-fit mx-auto">
                Save
            </Button>
        </div>
    );
}

export default ResetPassword;
