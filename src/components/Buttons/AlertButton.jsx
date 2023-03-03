import React from "react";

function AlertButton({ children, ...props }) {
  return (
    <button
      type="button"
      class="text-white bg-red-500 hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
      {...props}
    >
      {children}
    </button>
  );
}

export default AlertButton;
