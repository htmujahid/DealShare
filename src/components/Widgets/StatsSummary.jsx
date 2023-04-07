import React from "react";

function StatsSummary({ icon, value = [] }) {
  return (
    <div class="flex min-h-[125px] w-full flex-col justify-between rounded-xl bg-white px-4 py-3">
      <div className="pt-2 pl-2">{icon}</div>

      <div class={`grid grid-cols-${value.length} items-end justify-between`}>
        {value.map((item) => {
          return (
            <div>
              <div>
                <p class="text-[#8B8D97] text-sm">{item.title}</p>
              </div>
              <div>
                <div class="flex items-end gap-2">
                  <p class="text-3xl font-medium">{item.value}</p>
                  <p class="text-xs text-[#519C66]">{item.percent}</p>
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
