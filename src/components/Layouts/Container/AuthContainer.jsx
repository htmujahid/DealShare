import React from "react";

function AuthContainer({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
}

export default AuthContainer;
