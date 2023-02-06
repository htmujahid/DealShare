import React from "react";

function Select({ options, ...props }) {
    return (
        <select className="bg-gray-100 px-4 py-3 border rounded-xl" {...props}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
