import Link from "next/link";
import React from "react";
import { CustomerContainer } from "../Container";

function CustomerFooter() {
    return (
        <CustomerContainer>
            <footer className="flex justify-between">
                <div>
                    <h2 className="mb-6 text-sm font-bold  uppercase">
                        Company
                    </h2>
                    <ul className="text-sm">
                        <li className="mb-4">
                            <Link href="#" className=" ">
                                About
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Careers
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Brand Center
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold  uppercase">
                        Help center
                    </h2>
                    <ul className="text-sm">
                        <li className="mb-4">
                            <Link href="#" className="">
                                Discord Server
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Twitter
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Facebook
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold  uppercase">Legal</h2>
                    <ul className="text-sm">
                        <li className="mb-4">
                            <Link href="#" className="">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Licensing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold  uppercase">
                        Download
                    </h2>
                    <ul className="text-sm">
                        <li className="mb-4">
                            <Link href="#" className="">
                                iOS
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Android
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                Windows
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="">
                                MacOS
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="py-4 ">
                <span className="text-sm  sm:text-center">
                    © 2023 <Link href="">DealShare™</Link>. All Rights Reserved.
                </span>
            </div>
        </CustomerContainer>
    );
}

export default CustomerFooter;
