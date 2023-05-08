import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomerNew from "./CustomerNew";
import { ActivityIcon, CustomerIcon } from "@/components/Assets";
import { useCustomers } from "@/lib/app/customer";

function CustomersSummary() {
  const router = useRouter();
  const { customers, isLoading, isError } = useCustomers();
  const [allCustomers, setAllCustomers] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);

  useEffect(() => {
    if (customers) {
      setAllCustomers(customers.length);
      setNewCustomers(() => {
        customers.filter(
          (customer) => new Date(customer.createdAt) > new Date() - 86400000 * 7
        ).length;
      });
    }
  }, [customers]);

  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Customers Summary
          </h1>

          <PrimaryButton
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            Add New Customer
          </PrimaryButton>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <StatsSummary
            icon={<CustomerIcon />}
            value={[
              { title: "All Customers", value: allCustomers },
              { title: "New Customers", value: newCustomers ?? 0 },
            ]}
          />
          {/* <StatsSummary
            icon={<ActivityIcon />}
            value={[
              { title: "Active Customers", value: 325 },
              { title: "Returning Customers", value: 0 },
            ]}
          /> */}
          {/* <StatsSummary
            icon={<ActivityIcon />}
            value={[
              { title: "1 Star Rating", value: 3 },
              { title: "5 Star Rating", value: 5 },
            ]}
          /> */}
        </div>
      </div>
      {showAddModal && <CustomerNew setShowAddModal={setShowAddModal} />}
    </>
  );
}

export default CustomersSummary;
