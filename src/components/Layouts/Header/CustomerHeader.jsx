import {
  CustomerBottomNavbar,
  CustomerSearchBar,
  CustomerTobNavbar,
} from "../Navbar";
import { PrimaryLogo } from "@/components/Application";
import { SearchContextProvider } from "@/components/ContextProviders";
function CustomerHeader() {
  return (
    <>
      {/* <CustomerTobNavbar /> */}
      <PrimaryLogo />
      <SearchContextProvider>
        <CustomerSearchBar />
      </SearchContextProvider>
      <CustomerBottomNavbar />
    </>
  );
}

export default CustomerHeader;
