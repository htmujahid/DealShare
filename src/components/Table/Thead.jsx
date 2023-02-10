import React from "react";

function Thead({ children }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </thead>
  );
}

export default Thead;
