import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DashboardIcon,
  ProductIcon,
  OrderIcon,
  ConversationIcon,
  SettingsIcon,
  LogoutIcon,
} from "@/components/Assets";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/manufacturer",
  },
  {
    name: "Products",
    icon: <ProductIcon />,
    path: "/manufacturer/products",
  },
  {
    name: "Orders",
    icon: <OrderIcon />,
    path: "/manufacturer/orders",
  },
  {
    name: "Conversations",
    icon: <ConversationIcon />,
    path: "/manufacturer/conversations",
  },
  {
    name: "Setting",
    icon: <SettingsIcon />,
    path: "/manufacturer/setting",
  },
];

function ManufacturerSidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      ariaLabel="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                  pathname === item.path ? "bg-primary" : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
          <li>
            <button className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 w-full">
              <LogoutIcon />
              <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ManufacturerSidebar;
