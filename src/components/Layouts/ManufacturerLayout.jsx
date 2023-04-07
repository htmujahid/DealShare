import React from "react";
import { ManufacturerHeader } from "./Header";
import { ManufacturerSidebar } from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <ManufacturerHeader />
      <ManufacturerSidebar />
      <div className="pt-8 sm:pb-4 sm:pr-2 sm:pl-64 bg-[#E5E5E5] min-h-screen">
        <div className="mt-10 mx-4">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
