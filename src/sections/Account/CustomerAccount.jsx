import { CustomerContainer } from "@/components/Layouts/Container";
import React, { useState } from "react";
import SettingsSection from "./SettingSection";
import Sidebar from "./Sidebar";

function CustomerAccount() {
    const [selectedSetting, setSelectedSetting] = useState("DETAILS");
    return (
        <CustomerContainer>
            <div className="my-16">
                <h2 className="text-[28px] font-semibold grid">My Account</h2>

                <div className="grid grid-cols-1 sm:grid-cols-[200px,1px,1fr] items-start gap-8 mt-6">
                    <Sidebar
                        selectedSetting={selectedSetting}
                        onOptionClick={(setting) => setSelectedSetting(setting)}
                    />
                    <div className="border-r h-full hidden sm:block"></div>
                    <SettingsSection settingType={selectedSetting} />
                </div>
            </div>
        </CustomerContainer>
    );
}

export default CustomerAccount;
