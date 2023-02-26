import React from "react";
import Contacts from "./Contacts";
import Chat from "./Chat";
function Conversations() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Conversations</h1>
      </div>
      <div className="relative h-[calc(100vh-120px)]">
        <div className="absolute top-0 bottom-12 w-full">
          <div className="grid w-full grid-cols-1 gap-y-4 xl:gap-4 mt-4 xl:grid-cols-3 h-full">
            <Contacts />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
