import React from "react";

function Invoices() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">02-03-2023</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 text-right">$2999</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invoices;
