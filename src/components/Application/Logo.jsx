import { Logo as LogoAsset } from "@/components/Assets";
import Link from "next/link";

function Logo() {
  <Link href="/" className="flex justify-center py-5">
    <LogoAsset />
  </Link>;
}

export default Logo;
