import React from "react";

function Th({ className, children, ...props }) {
  return (
    <th className={`px-6 py-3 ${className}`} {...props}>
      {children}
    </th>
  );
}

export default Th;
