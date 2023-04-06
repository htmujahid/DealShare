import { PrimaryButton } from "@/components/Buttons";
import { Input, Textarea } from "@/components/Form";
import React from "react";

function SettingComponents() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
          <div className="mb-4 col-span-full xl:mb-2">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              User settings
            </h1>
          </div>

          <div className="col-span-2">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6">
              <h3 className="mb-4 text-xl font-semibold ">
                General information
              </h3>
              <form action="#">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input placeholder="Bonnie" className="w-full">
                    First Name
                  </Input>
                  <Input placeholder="Heniv" className="w-full">
                    Last Name
                  </Input>
                  <Input
                    type="email"
                    placeholder="bonnei@email.com"
                    className="w-full"
                  >
                    Email
                  </Input>
                  <Input type="tel" placeholder="1234567890" className="w-full">
                    Phone
                  </Input>
                  <Input placeholder="California" className="w-full">
                    Address
                  </Input>
                  <Input placeholder="San Francisco" className="w-full">
                    City
                  </Input>
                  <Input placeholder="California" className="w-full">
                    State
                  </Input>
                  <Input placeholder="United States" className="w-full">
                    Country
                  </Input>
                  <PrimaryButton className="mx-auto col-span-2">
                    Save
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 h-min">
            <h3 className="mb-4 text-xl font-semibold ">
              Password information
            </h3>
            <form action="#">
              <div className="grid grid-cols-1 gap-6">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                >
                  Current password
                </Input>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                >
                  New password
                </Input>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                >
                  Confirm password
                </Input>

                <PrimaryButton className="mx-auto">Save</PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingComponents;
