import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ManufacturerNew from "./ManufacturerNew";
import { ActivityIcon, ManufacturerIcon } from "@/components/Assets";
import { useManufacturers } from "@/lib/app/manufacturer";

function ManufacturersSummary() {
  const router = useRouter();
  const { manufacturers, isLoading, isError } = useManufacturers();

  const [allManufacturers, setAllManufacturers] = useState(0);
  const [newManufacturers, setNewManufacturers] = useState(0);

  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (manufacturers) {
      setAllManufacturers(manufacturers.length);
      setNewManufacturers(() => {
        manufacturers.filter(
          (manufacturer) =>
            new Date(manufacturer.createdAt) > new Date() - 86400000 * 7
        ).length;
      });
    }
  }, [manufacturers]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Manufacturers Summary
          </h1>

          <PrimaryButton
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            Add New Manufacturer
          </PrimaryButton>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <StatsSummary
            icon={<ManufacturerIcon />}
            value={[
              { title: "All Manufacturers", value: allManufacturers },
              { title: "New Manufacturers", value: newManufacturers ?? 0 },
            ]}
          />
          {/* <StatsSummary
            icon={<ActivityIcon />}
            value={[
              { title: "Active Manufacturers", value: 325 },
              { title: "Returning Manufacturers", value: 0 },
            ]}
          /> */}
          {/* <StatsSummary
            value={[
              { title: "1 Star Rating", value: 3 },
              { title: "5 Star Rating", value: 5 },
            ]}
          /> */}
        </div>
      </div>
      {showAddModal && <ManufacturerNew setShowAddModal={setShowAddModal} />}
    </>
  );
}

export default ManufacturersSummary;
