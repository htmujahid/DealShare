import React from "react";

function Checkbox({ children, ...props }) {
    return (
        <div className="bg-gray-100 rounded-xl border flex gap-2 p-2">
            <input type="checkbox" {...props} />
            <label className="text-sm">{children}</label>
        </div>
    );
}

export default Checkbox;
