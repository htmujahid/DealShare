import React from "react";

function ModalHeader({ heading, headingSize, onClose }) {
  return (
    <div className="flex px-6">
      <h1
        className="text-xl font-semibold leading-[18px]"
        style={{ fontSize: headingSize }}
      >
        {heading}
      </h1>
      <button className="block ml-auto" onClick={onClose}>
        <span className="material-symbols-outlined">cancel</span>
      </button>
    </div>
  );
}

export default ModalHeader;
