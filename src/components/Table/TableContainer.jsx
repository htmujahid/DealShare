import React from "react";

function TableContainer({ children }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {children}
    </div>
  );
}

export default TableContainer;
