import React from "react";
import { DashboardHeader } from "./Header";
import { DashboardSidebar } from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <div className="pt-8 sm:pb-4 sm:pr-2 sm:pl-64 bg-[#E5E5E5] min-h-screen">
        <div className="mt-10 mx-4">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
