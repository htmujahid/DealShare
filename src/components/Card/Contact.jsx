import React from "react";

function Contact() {
  return (
    <div className="h-16 shrink-0">
      <div className="flex items-center justify-start gap-1 xl:gap-4 h-full">
        <div className="w-12 h-12 bg-gray-100 rounded"></div>
        <div>
          <h1 className="text-sm font-semibold text-gray-900">John Doe</h1>
          <p className="text-xs text-gray-500 hidden">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex-1 text-right hidden">
          <p className="text-xs text-gray-500 whitespace-nowrap">12:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
