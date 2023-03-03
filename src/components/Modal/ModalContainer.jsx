import React, { useEffect } from "react";

function ModalContainer({ maxWidth, className, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full flex bg-black/[0.5]">
      <div
        className={
          "rounded bg-white w-[80%] sm:w-[60%] py-6 shadow-[rgba(0,0,0,0.25)]" +
          className
        }
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
