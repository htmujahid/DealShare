import { Button, Checkbox, Input, Textarea } from "@/components/Form";
import React from "react";

function BillingInfo() {
  return (
    <div className="flex-1">
      <div className="mb-16">
        <div className="mb-8">
          <h5 className="text-2xl font-bold pb-1">Billing Info</h5>
          <p className="text-sm text-gray-500 pb-1">
            Please enter your billing info
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Input className="w-full" placeholder="First Name">
            First Name
          </Input>
          <Input className="w-full" placeholder="Last Name">
            Last Name
          </Input>
          <Input className="w-full" placeholder="Email" type="email">
            Email
          </Input>
          <Input className="w-full" placeholder="Phone Number">
            Phone Number
          </Input>
          <Input className="w-full" placeholder="Address">
            Address
          </Input>
          <Input className="w-full" placeholder="Town / City">
            Town / City
          </Input>
          <Input className="w-full" placeholder="State Country">
            State Country
          </Input>
          <Input className="w-full" placeholder="Zip">
            Zip
          </Input>
        </div>
      </div>
      <div className="mb-16">
        <div className="mb-8">
          <h5 className="text-2xl font-bold pb-1">Payment Method</h5>
          <p className="text-sm text-gray-500 pb-1">
            Please enter your payment method
          </p>
        </div>
        <div className="border rounded-xl p-4">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Credit Card</p>
            <div></div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="col-span-2">
              <Input className="w-full" placeholder="Card Number">
                Card Number
              </Input>
            </div>
            <Input className="w-full" placeholder="Card Holder">
              Card Holder
            </Input>
            <div className="flex gap-4">
              <Input className="w-full" placeholder="Expiration Date">
                Expiration Date
              </Input>
              <Input className="w-full" placeholder="CVV">
                CVV
              </Input>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="mb-8">
          <h5 className="text-2xl font-bold pb-1">Additional Information</h5>
          <p className="text-sm text-gray-500 pb-1">
            Need something else? We will make it for you
          </p>
        </div>
        <div className="mb-16">
          <Textarea classname="w-full h-32">Additional Information</Textarea>
        </div>
      </div>
      <div className="">
        <div className="mb-8">
          <h5 className="text-2xl font-bold pb-1">Confirmation</h5>
          <p className="text-sm text-gray-500 pb-1">
            We are getting to the end. Just few clicks and your order si ready!
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <Checkbox>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </Checkbox>
          <Checkbox>
            I agree with our terms and conditions and privacy policy.
          </Checkbox>
        </div>
        <div>
          <Button variant="primary">Complete Order</Button>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
