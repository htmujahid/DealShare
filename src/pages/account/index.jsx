import { CustomerLayout } from "@/components/Layouts";
import { CustomerAccount } from "@/sections/Account";

export default function Home() {
    return (
        <CustomerLayout>
            <CustomerAccount />
        </CustomerLayout>
    );
}
