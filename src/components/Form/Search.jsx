import React from "react";

function Search({ children }) {
  return (
    <>
      <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
        <input
          type="text"
          name="email"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          placeholder={children}
        />
      </div>
    </>
  );
}

export default Search;
