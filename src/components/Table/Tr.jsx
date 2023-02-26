import React from "react";

function Tr({ className, children }) {
  return <tr className={`hover:bg-gray-100 ${className}`}>{children}</tr>;
}

export default Tr;
