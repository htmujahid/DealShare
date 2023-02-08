import React from "react";
import { CustomerFooter } from "./Footer";
import { CustomerHeader } from "./Header";
function CustomerLayout({ children }) {
    return (
        <div className="min-w-[1280px]">
            <CustomerHeader />
            {children}
            <CustomerFooter />
        </div>
    );
}

export default CustomerLayout;
