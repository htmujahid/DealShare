import React from "react";

function CategoryFilters() {
  const filters = [
    {
      title: "Brands",
      types: [
        {
          id: 1,
          name: "Apple",
          slug: "apple",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Samsung",
          slug: "samsung",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Xiaomi",
          slug: "xiaomi",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Huawei",
          slug: "huawei",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          name: "Oppo",
          slug: "oppo",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 6,
          name: "Vivo",
          slug: "vivo",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      title: "Size",
      types: [
        {
          id: 1,
          name: "S",
          slug: "s",
        },
        {
          id: 2,
          name: "M",
          slug: "m",
        },
        {
          id: 3,
          name: "L",
          slug: "l",
        },
        {
          id: 4,
          name: "XL",
          slug: "xl",
        },
        {
          id: 5,
          name: "XXL",
          slug: "xxl",
        },
      ],
    },
    {
      title: "Color",
      types: [
        {
          id: 1,
          name: "Red",
          slug: "red",
          color: "#ff0000",
        },
        {
          id: 2,
          name: "Green",
          slug: "green",
          color: "#00ff00",
        },
        {
          id: 3,
          name: "Blue",
          slug: "blue",
          color: "#0000ff",
        },
        {
          id: 4,
          name: "Yellow",
          slug: "yellow",
          color: "#ffff00",
        },
        {
          id: 5,
          name: "Black",
          slug: "black",
          color: "#000000",
        },
        {
          id: 6,
          name: "White",
          slug: "white",
          color: "#ffffff",
        },
      ],
    },
    {
      title: "Rating",
      types: [
        {
          id: 1,
          name: "1 Star",
          slug: "1-star",
        },
        {
          id: 2,
          name: "2 Star",
          slug: "2-star",
        },
        {
          id: 3,
          name: "3 Star",
          slug: "3-star",
        },
        {
          id: 4,
          name: "4 Star",
          slug: "4-star",
        },
        {
          id: 5,
          name: "5 Star",
          slug: "5-star",
        },
      ],
    },
  ];
  return (
    <div className="min-w-[230px]">
      {filters.map((filter) => {
        return (
          <div key={filter.title}>
            <h3 className="text-lg font-semibold mb-2">{filter.title}</h3>
            <div className="flex flex-col">
              {filter.types.map((type) => {
                return (
                  <div key={type.id} className="flex items-center mr-4 mb-2">
                    <input id={type.slug} type="checkbox" className="mr-2" />
                    <label className="text-sm" htmlFor={type.slug}>
                      {type.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <div className="flex flex-row items-center gap-2">
          <div className="">
            <label className="text-sm font-semibold block" htmlFor="price-1">
              Min
            </label>
            <input
              id="price-1"
              type="number"
              className="mr-2 w-[100px] h-[42px] border rounded-xl p-4"
            />
          </div>
          <div className="">
            <label className="text-sm font-semibold block" htmlFor="price-2">
              Max
            </label>
            <input
              id="price-2"
              type="number"
              className="mr-2 w-[100px] h-[42px] border rounded-xl p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilters;
