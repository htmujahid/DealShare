import { Contact } from "@/components/Card";
import { Input } from "@/components/Form";
import React from "react";

function Contacts() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full relative top-0 bottom-0">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Contacts</h1>
        <p>39</p>
      </div>
      <Input type="text" placeholder="Search" className="w-full my-4" />
      <div className="overflow-auto h-16 xl:h-[86%] scrollbar-hide">
        <div className="flex flex-row xl:flex-col gap-x-4">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <Contact key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;

// 16*4*11 = 704
