import { useState } from "react";

export const AccordionItem = ({ title, expanded, skipButton, children }) => {
  const [collapsed, setCollapsed] = useState(!expanded);

  return (
    <div className={!collapsed ? "mb-2 last:mb-0" : "mb-1"}>
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="flex justify-between p-2 bg-gray-100 rounded"
      >
        <span className="font-semibold">{title}</span>
        <span>
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" />
              <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
            </svg>
          )}
        </span>
      </div>
      <div
        className={
          collapsed
            ? "max-h-0 transition-[max-height] duration-700 overflow-hidden"
            : "max-h-[2000px] transition-[max-height] transition-all duration-700"
        }
      >
        <div className="p-4">
          {children}
          {skipButton && (
            <div className="mt-2 font-semibold text-right">
              <button onClick={() => setCollapsed(true)} id="collapse">
                Skip
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ children }) => {
  return <div>{children}</div>;
};
