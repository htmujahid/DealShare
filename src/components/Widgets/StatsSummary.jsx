import React from "react";

function StatsSummary({ icon, value = [] }) {
  return (
    <div className="flex min-h-[125px] w-full flex-col justify-between rounded-xl bg-white px-4 py-3">
      <div className="pt-2 pl-2">{icon}</div>

      <div
        className={`grid grid-cols-${value.length} items-end justify-between`}
      >
        {value.map((item) => {
          return (
            <div key={item.title}>
              <div>
                <p className="text-[#8B8D97] text-sm">{item.title}</p>
              </div>
              <div>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-medium">{item.value}</p>
                  <p className="text-xs text-[#519C66]">{item.percent}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsSummary;
