import React, { useState } from "react";
import { ManufacturerHeader } from "./Header";
import { ManufacturerSidebar } from "./Sidebar";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <ManufacturerHeader setIsSidebarOpen={setIsSidebarOpen} />
      <ManufacturerSidebar isSidebarOpen={isSidebarOpen} />
      <div className="pt-8 md:pb-4 md:pr-2 md:pl-64 bg-[#E5E5E5] min-h-screen">
        <div className="mt-10 mx-4">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
