import { CustomerContainer } from "@/components/Layouts/Container";
import React, { useEffect, useState } from "react";
import SettingsSection from "./SettingSection";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { userRoles } from "@/lib/app/user";

function CustomerAccount() {
  const [selectedSetting, setSelectedSetting] = useState("DETAILS");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.user) {
      switch (session.user.role) {
        case userRoles.CUSTOMER:
          break;
        case userRoles.MANUFACTURER:
          router.replace("/manufacturer");
          break;
        case userRoles.ADMIN:
          router.replace("/admin");
      }
    }
  }, [session]);

  return (
    <CustomerContainer>
      <div className="my-16">
        <h2 className="text-[28px] font-semibold grid">My Account</h2>

        <div className="grid grid-cols-1 sm:grid-cols-[200px,1px,1fr] items-start gap-8 mt-6">
          <Sidebar
            selectedSetting={selectedSetting}
            onOptionClick={(setting) => setSelectedSetting(setting)}
          />
          <div className="hidden h-full border-r sm:block"></div>
          <SettingsSection settingType={selectedSetting} />
        </div>
      </div>
    </CustomerContainer>
  );
}

export default CustomerAccount;
