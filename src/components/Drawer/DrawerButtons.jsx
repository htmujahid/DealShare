import React from "react";

function DrawerButtons({ children, className }) {
  return (
    <div
      className={`bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute ${className}`}
    >
      {children}
    </div>
  );
}

export default DrawerButtons;
