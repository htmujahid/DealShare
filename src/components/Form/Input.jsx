import React from "react";

function Input({ htmlFor, className, children, divClassName, ...props }) {
    return (
        <div className={divClassName}>
            <label className="mr-2 block text-sm font-bold" htmlFor={htmlFor}>
                {children}
            </label>
            <input
                className={`bg-gray-100 px-4 py-3 border rounded-xl ${className}`}
                {...props}
            />
        </div>
    );
}

export default Input;
