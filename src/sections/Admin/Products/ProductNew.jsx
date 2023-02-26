import { DarkButton, PrimaryButton } from "@/components/Buttons";
import { Input, Select, Textarea } from "@/components/Form";
import React from "react";

function ProductNew() {
  return (
    <form>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">New Product</h1>
        <div className="flex gap-6">
          <DarkButton>Save as Draft</DarkButton>
          <PrimaryButton>Publish</PrimaryButton>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-4 2xl:gap-4 mt-4 2xl:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md col-span-2 p-8 h-min">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <div>
              <Input placeholder="Product Name" className="w-full mt-4" />
              <Select
                className="w-full mt-4"
                options={[
                  { value: "", label: "Select Category" },
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                  { value: "3", label: "Option 3" },
                ]}
              />
              <div className="flex mt-4 gap-3 w-full">
                <Input
                  placeholder="Selling Price"
                  divClassName="w-full"
                  className="w-full"
                />
                <Input
                  placeholder="Cost Price"
                  divClassName="w-full"
                  className="w-full"
                />
              </div>
              <Input
                placeholder="Quantity in Stock"
                type="number"
                className="w-full mt-4"
                min="0"
              />
            </div>
            <div>
              <Input
                placeholder="Pool Threshold"
                type="number"
                className="w-full mt-4"
              />
              <Textarea
                classname="w-full h-44 mt-4"
                placeholder="Description"
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-full h-96 bg-gray-100 rounded-xl mt-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-blue-500">Upload Image</p>
              <p>Upload a cover image for your product.</p>
              <p>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
            </div>
          </div>

          <p className="text-xl font-bold mt-8">Additional Images</p>
          <div className="flex flex-wrap justify-start mt-4 gap-4">
            <div className="w-48 h-48 bg-gray-100 rounded"></div>
            <div className="w-48 h-48 border-4 border-gray-100 border-dashed rounded flex items-center justify-center">
              + Upload Images
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProductNew;
