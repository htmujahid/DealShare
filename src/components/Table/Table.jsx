import React from "react";

function Table({ children }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        {children}
      </table>
    </div>
  );
}

export default Table;
