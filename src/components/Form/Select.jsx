import React from "react";

function Select({ options, className, htmlFor, children, ...props }) {
    return (
        <div>
            <label className="mr-2 block text-sm font-bold" htmlFor={htmlFor}>
                {children}
            </label>
            <select
                className={`bg-gray-100 px-4 py-3 border rounded-xl ${className}`}
                {...props}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
