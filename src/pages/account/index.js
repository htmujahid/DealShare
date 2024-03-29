import { CustomerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
// import { userRoles } from "@/lib/app/user";
import { CustomerAccount } from "@/sections/Account";

function Home() {
  return (
    <CustomerLayout>
      <CustomerAccount />
    </CustomerLayout>
  );
}

Home.routeProtector = [
  userRoles.CUSTOMER,
  userRoles.MANUFACTURER,
  userRoles.ADMIN,
];

export default Home;
