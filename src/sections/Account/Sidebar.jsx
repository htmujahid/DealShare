import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import AccountDetails from "./AccountDetails";
import Address from "./Address";
import Invoices from "./Invoices";
import Orders from "./Orders";
import ResetPassword from "./ResetPassword";

export const settingOptions = {
  DETAILS: {
    id: "details",
    text: "Details",
    component: <AccountDetails />,
  },
  ORDERS: {
    id: "orders",
    text: "Orders",
    component: <Orders />,
  },
  INVOICES: {
    id: "invoices",
    text: "Invoices",
    component: <Invoices />,
  },
  ADDRESS: {
    id: "address",
    text: "Address",
    component: <Address />,
  },
  PASSWORD: {
    id: "password",
    text: "Password",
    component: <ResetPassword />,
  },
};

function Sidebar({ selectedSetting, onOptionClick }) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/auth/login");
      toast.success("You have been successfully signed out.");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <aside className="grid font-medium gap-y-2">
      {Object.entries(settingOptions).map(([key, option]) => (
        <SidebarButton
          key={key}
          active={selectedSetting === key}
          id={option.id}
          onClick={() => onOptionClick(key)}
          text={option.text}
        />
      ))}
      <SidebarButton onClick={handleSignOut} text={"Logout"} />
    </aside>
  );
}

function SidebarButton({ active, id, text, onClick }) {
  return (
    <button
      id={id}
      className={`
                "py-2 px-3 rounded-md text-left 
                ${
                  active ? "bg-white" : "bg-gray-100"
                } border-[0.5px] w-[200px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Sidebar;
