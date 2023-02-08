import React from "react";

function Button({ type = "default", className, children, ...props }) {
    return (
        <button
            className={`px-4 py-3 border rounded-xl font-bold flex items-center ${
                type == "primary" ? "bg-primary" : "bg-gray-100"
            } ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
