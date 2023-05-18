import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OrderNew } from ".";
import {
  CheckCircleIcon,
  CrossCircleIcon,
  OrderIcon,
} from "@/components/Assets";
import { useAdminOrders } from "@/lib/app/order";

function OrdersSummary() {
  const router = useRouter();
  const { orders, isLoading, isError } = useAdminOrders();

  useEffect;

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
              { title: "All Orders", value: orders?.length },
              { title: "Active Orders", value: orders?.length },
            ]}
          />
          <StatsSummary
            icon={<CheckCircleIcon />}
            value={[
              {
                title: "Completed Orders",
                value: orders?.filter((order) => order.status == "completed")
                  .length,
              },
              {
                title: "Pending Orders",
                value: orders?.filter((order) => order.status == "pending")
                  .length,
              },
            ]}
          />
          <StatsSummary
            icon={<CrossCircleIcon />}
            value={[
              {
                title: "Paid Orders",
                value: orders?.filter((order) => order.paid).length,
              },
              {
                title: "Unpaid Orders",
                value: orders?.filter((order) => !order.paid).length,
              },
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
