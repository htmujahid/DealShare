import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

const Breadcrumbs = () => {
    const breadcrumbs = [
        {
            label: "Home",
            href: "/",
        },
    ];

    return (
        <CustomerContainer>
            <nav className="flex items-center text-sm font-medium text-gray-500 py-4">
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                        <a
                            href={breadcrumb.href}
                            className="hover:text-gray-700"
                        >
                            {breadcrumb.label}
                        </a>
                        {index !== breadcrumbs.length - 1 && (
                            <span className="mx-2 text-gray-400">/</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </CustomerContainer>
    );
};

export default Breadcrumbs;
