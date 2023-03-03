import React from "react";

function GeneralSummary({ icon, value = [], title, subtitle }) {
  return (
    <div class="flex min-h-[145px] w-full flex-col justify-between rounded-xl bg-white px-4 py-3">
      <div className="flex gap-2">
        <div>{icon}</div>
        <div>
          <p>{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>

      <div class={`grid grid-cols-${value.length} items-end justify-between`}>
        {value.map((item) => {
          return (
            <div>
              <div>
                <p class="text-[#8B8D97] text-sm">{item.title}</p>
              </div>
              <div>
                <div class="flex items-end gap-2">
                  <p class="font-medium">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GeneralSummary;
