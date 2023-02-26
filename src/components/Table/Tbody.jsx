import React from "react";

function Tbody({ children }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
}

export default Tbody;
