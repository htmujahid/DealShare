import React from "react";

function Tr({ className, children }) {
  return <tr className={`${className}`}>{children}</tr>;
}

export default Tr;
