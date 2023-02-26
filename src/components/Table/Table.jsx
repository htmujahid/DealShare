import React from "react";

function Table({ children }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed">
      {children}
    </table>
  );
}

export default Table;
