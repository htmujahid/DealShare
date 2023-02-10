import React from "react";

function Td({ className, children }) {
  return <td className={`px-6 py-4 ${className}`}>{children}</td>;
}

export default Td;
