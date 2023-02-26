import {
  CategoriesSummary,
  OrdersByArea,
  RecentOrdersSummary,
  SaleExpenseSummary,
  StatsSummary,
} from "@/components/Widgets";
import React from "react";

function DashboardComponents() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <StatsSummary
          value={[
            { title: "All Customers", value: 350 },
            { title: "Active Customers", value: 325 },
          ]}
        />
        <StatsSummary
          value={[
            { title: "New Customers", value: 13 },
            { title: "Returning Customers", value: 0 },
          ]}
        />
        <StatsSummary
          value={[
            { title: "All Products", value: 350 },
            { title: "Active Products", value: 325 },
          ]}
        />

        <StatsSummary
          value={[
            { title: "New Products", value: 13 },
            { title: "Returning Products", value: 0 },
          ]}
        />
        <OrdersByArea />
        <CategoriesSummary />
        <StatsSummary
          value={[
            { title: "All Orders", value: 350 },
            { title: "Active Orders", value: 325 },
            { title: "New Orders", value: 13 },
          ]}
        />
      </div>
      <div class="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <SaleExpenseSummary />
        <RecentOrdersSummary />
      </div>
    </>
  );
}

export default DashboardComponents;
