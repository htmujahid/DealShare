import React from "react";

function GrayButton({ icon, children, onClick, ...props }) {
  return (
    <button
      type="button"
      className="inline-flex items-center text-gray-500 bg-gray-100 hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default GrayButton;
