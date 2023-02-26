import React from "react";

function Textarea({ classname, children, ...props }) {
  return (
    <div>
      <label className="text-sm font-bold block">{children}</label>
      <textarea
        className={`bg-gray-100 px-4 py-3 border rounded-xl ${classname}`}
        {...props}
      ></textarea>
    </div>
  );
}

export default Textarea;
