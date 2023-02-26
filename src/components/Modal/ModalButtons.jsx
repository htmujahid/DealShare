import React from "react";

function ModalButtons({ children, className }) {
  return (
    <div className={`flex justify-center w-full space-x-4 ${className}`}>
      {children}
    </div>
  );
}
export default ModalButtons;
