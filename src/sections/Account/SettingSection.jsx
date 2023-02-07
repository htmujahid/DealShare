import { Button } from "@/components/Form";
import { settingOptions } from "./Sidebar";

function SettingsSection({ settingType }) {
    return <div>{settingOptions[settingType].component}</div>;
}

export function SettingsSectionContainer({ children }) {
    return (
        <div className="rounded-md shadow-[0px_1px_4px_rgba(0,0,0,0.25)] bg-white p-12 min-h-[316px]">
            {children}
        </div>
    );
}

export function SaveButton({ onClick }) {
    return (
        <Button className="ml-auto mt-10" onClick={onClick}>
            Save Changes
        </Button>
    );
}

export default SettingsSection;
