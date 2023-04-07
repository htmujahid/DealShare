import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { OrderNew } from ".";
import {
  CheckCircleIcon,
  CrossCircleIcon,
  OrderIcon,
} from "@/components/Assets";

function OrdersSummary() {
  const router = useRouter();
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Orders Summary
          </h1>

          <PrimaryButton
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            Create New Order
          </PrimaryButton>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <StatsSummary
            icon={<OrderIcon />}
            value={[
              { title: "All Orders", value: 350 },
              { title: "Active Orders", value: 325 },
            ]}
          />
          <StatsSummary
            icon={<CheckCircleIcon />}
            value={[
              { title: "Completed Orders", value: 13 },
              { title: "Pending Orders", value: 0 },
            ]}
          />
          <StatsSummary
            icon={<CrossCircleIcon />}
            value={[
              { title: "Cancelled Orders", value: 3 },
              { title: "Abondoned Cart", value: 5 },
            ]}
          />
        </div>
      </div>
      {showAddModal && (
        <OrderNew
          setShowAddModal={() => {
            setShowAddModal(false);
          }}
        />
      )}
    </>
  );
}

export default OrdersSummary;
