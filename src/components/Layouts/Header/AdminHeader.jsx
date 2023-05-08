import { useSession } from "next-auth/react";
import React from "react";

function AdminHeader({ setIsSidebarOpen }) {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsSidebarOpen((pre) => !pre)}
              type="button"
              className="inline-flex items-center px-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="/" className="flex ml-2 md:mr-24">
              <img src="/assets/icons/logo.svg" alt="" className="h-8" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              Hi,{" "}
              <span className="ml-1 font-semibold">
                {session?.user?.firstName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
