import React from "react";
import DotLoader from "./../Loaders/DotLoader";

function Button({
  variant = "default",
  loading,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 border rounded-xl font-semibold text-center ${
        variant == "primary" ? "bg-primary" : "bg-gray-100"
      } ${className}`}
      {...props}
    >
      {loading ? <DotLoader /> : children}
    </button>
  );
}

export default Button;
