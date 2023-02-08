import React from "react";

function Textarea({ classname, children }) {
    return (
        <div>
            <label className="text-sm font-bold block">{children}</label>
            <textarea
                className={`bg-gray-100 px-3 py-2 border rounded-xl ${classname}`}
            ></textarea>
        </div>
    );
}

export default Textarea;
