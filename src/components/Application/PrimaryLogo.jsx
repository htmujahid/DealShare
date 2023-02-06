import { PrimaryLogo as PrimaryLogoAsset } from "@/components/Assets";
import Link from "next/link";
function PrimaryLogo() {
    return (
        <Link href="/" className="flex justify-center py-5">
            <PrimaryLogoAsset />
        </Link>
    );
}

export default PrimaryLogo;
