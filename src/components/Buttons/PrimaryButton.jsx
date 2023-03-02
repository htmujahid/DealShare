import React from "react";

function CreateButton({ icon, children, className, onClick, ...props }) {
  return (
    <button
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-dark hover:bg-opacity-90 focus:ring-4 focus:ring-primary-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon}

      {children}
    </button>
  );
}

export default CreateButton;
