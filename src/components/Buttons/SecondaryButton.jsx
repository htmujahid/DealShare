import React from "react";

function SecondaryButton({ icon, children, onClick, ...props }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-700 hover:bg-opacity-90 focus:ring-4 focus:ring-primary-300"
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default SecondaryButton;
