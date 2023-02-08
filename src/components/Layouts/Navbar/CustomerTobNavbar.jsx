import Link from "next/link";
import React from "react";
import { CustomerContainer } from "../Container";
const RIGHT_ITEMS = [
    {
        title: "Chat with us",
        link: "/",
    },
    {
        title: "234354353465i6594",
        link: "/",
    },
    {
        title: "dealshare@gmail.com",
        link: "/",
    },
];

const LEFT_ITEMS = [
    {
        title: "English",
        link: "/",
    },
    {
        title: "About",
        link: "/",
    },
    {
        title: "Help",
        link: "/",
    },
];

function CustomerTobNavbar() {
    return (
        <CustomerContainer>
            <div className="flex justify-between py-4 border-b border-opacity-10 border-primary-light">
                <div className="flex justify-between gap-8">
                    {RIGHT_ITEMS.map((item, index) => (
                        <Link href={item.link} className="text-sm" key={index}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="flex justify-between gap-8">
                    {LEFT_ITEMS.map((item, index) => (
                        <Link href={item.link} key={index} className="text-sm">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </CustomerContainer>
    );
}

export default CustomerTobNavbar;
