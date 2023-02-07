import React from "react";
import { Button, Input } from "@/components/Form";
function AccountDetails() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="w-full">
                    First Name
                </Input>
                <Input placeholder="Last Name" className="w-full">
                    Last Name
                </Input>
                <Input
                    placeholder="Username"
                    className="w-full"
                    divClassName="col-span-2"
                >
                    Username
                </Input>
                <Input placeholder="Email" type="email" className="w-full">
                    Email
                </Input>
                <Input placeholder="Phone" type="phone" className="w-full">
                    Phone
                </Input>
            </div>
            <Button className="w-fit mx-auto" type="primary">
                Save
            </Button>
        </div>
    );
}

export default AccountDetails;
