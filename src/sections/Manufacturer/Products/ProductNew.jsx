import { DarkButton, PrimaryButton } from "@/components/Buttons";
import { Input, Select, Textarea } from "@/components/Form";
import { useProductCategories } from "@/lib/app/product";
import { addProduct } from "@/lib/app/product/requests";
import React, { useState } from "react";

function ProductNew() {
  const { categories, error, loading } = useProductCategories();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    sellingPrice: "",
    costPrice: "",
    quantity: "",
    status: "",
    poolThreshold: "",
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      addProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      setProduct({
        name: "",
        category: "",
        sellingPrice: "",
        costPrice: "",
        quantity: "",
        status: "",
        poolThreshold: "",
        description: "",
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">New Product</h1>
        <div className="flex gap-6">
          <PrimaryButton>Publish</PrimaryButton>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-4 2xl:gap-4 mt-4 2xl:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md col-span-2 p-8 h-min">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <div>
              <Input
                placeholder="Product Name"
                className="w-full mt-4"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <Select
                placeholder="Select Category"
                className="w-full mt-4"
                options={
                  categories
                    ? [
                        { value: "", label: "Select Category" },
                        ...categories?.map((category) => ({
                          value: category.name.toLowerCase(),
                          label: category.name,
                        })),
                      ]
                    : [{ value: "", label: "Select Category" }]
                }
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              />
              <div className="flex mt-4 gap-3 w-full">
                <Input
                  placeholder="Selling Price"
                  divClassName="w-full"
                  type="number"
                  className="w-full"
                  value={product.sellingPrice}
                  onChange={(e) =>
                    setProduct({ ...product, sellingPrice: e.target.value })
                  }
                />
                <Input
                  placeholder="Cost Price"
                  divClassName="w-full"
                  type="number"
                  className="w-full"
                  value={product.costPrice}
                  onChange={(e) =>
                    setProduct({ ...product, costPrice: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 mt-4 gap-3 w-full">
                <Input
                  placeholder="Quantity in Stock"
                  type="number"
                  divClassName="w-full"
                  className="w-full"
                  min="0"
                  value={product.quantity}
                  onChange={(e) =>
                    setProduct({ ...product, quantity: e.target.value })
                  }
                />
                <Select
                  placeholder="Select Status"
                  divClassName="w-full"
                  className="w-full"
                  options={[
                    { value: "Published", label: "Published" },
                    { value: "Draft", label: "Draft" },
                  ]}
                  value={product.status}
                  onChange={(e) =>
                    setProduct({ ...product, status: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Input
                placeholder="Pool Threshold"
                type="number"
                className="w-full mt-4"
                min="0"
                value={product.poolThreshold}
                onChange={(e) =>
                  setProduct({ ...product, poolThreshold: e.target.value })
                }
              />
              <Textarea
                classname="w-full h-44 mt-4"
                placeholder="Description"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-full h-96 bg-gray-100 rounded-xl mt-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-blue-500">Upload Image</p>
              <p>Upload a cover image htmlFor your product.</p>
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
