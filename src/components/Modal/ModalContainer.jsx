import React, { useEffect } from "react";

function ModalContainer({ children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div class="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
      <div class="relative w-full h-full max-w-md md:h-auto bg-white p-4 shadow rounded-lg">
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
