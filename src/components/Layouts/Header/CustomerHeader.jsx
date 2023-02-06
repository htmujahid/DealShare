import {
    CustomerBottomNavbar,
    CustomerSearchBar,
    CustomerTobNavbar,
} from "../Navbar";
import { PrimaryLogo } from "@/components/Application";
function CustomerHeader() {
    return (
        <div>
            <CustomerTobNavbar />
            <PrimaryLogo />
            <CustomerSearchBar />
            <CustomerBottomNavbar />
        </div>
    );
}

export default CustomerHeader;
