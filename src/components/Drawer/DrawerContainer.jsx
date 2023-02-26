import React from "react";

function DrawerContainer({ children, id, ...props }) {
  return (
    <div
      className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white"
      tabindex="-1"
      ariaLabelledby="drawer-label"
      ariaHidden="true"
      id={id}
      style={{
        zIndex: 50,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default DrawerContainer;
