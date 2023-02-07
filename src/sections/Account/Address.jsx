import { Button, Input } from "@/components/Form";
import React from "react";

function Address() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Address" className="w-full">
                    Address
                </Input>
                <Input placeholder="City" className="w-full">
                    City
                </Input>
                <Input placeholder="Country" className="w-full">
                    Country
                </Input>
                <Input placeholder="Zip Code" className="w-full">
                    Zip Code
                </Input>
            </div>
            <Button type="primary" className="w-fit mx-auto">
                Save
            </Button>
        </div>
    );
}

export default Address;
