import React, { useState } from "react";
import { AdminHeader } from "./Header";
import { AdminSidebar } from "./Sidebar";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <AdminHeader setIsSidebarOpen={setIsSidebarOpen} />
      <AdminSidebar isSidebarOpen={isSidebarOpen} />
      <div className="pt-8 md:pb-4 md:pr-2 md:pl-64 bg-[#E5E5E5] min-h-screen">
        <div className="mt-10 mx-4">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
