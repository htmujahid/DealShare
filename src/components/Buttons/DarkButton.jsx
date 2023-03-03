import React from "react";

function DarkButton({ icon, children, onClick, ...props }) {
  return (
    <button
      type="button"
      class="inline-flex items-center text-white bg-gray-600 hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10"
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default DarkButton;
