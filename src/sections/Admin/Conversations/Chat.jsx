import Link from "next/link";
import React from "react";

function Chat() {
  const [message, setMessage] = React.useState();
  const [messages, setMessages] = React.useState([]);
  return (
    <div className="bg-white rounded-lg shadow-md col-span-2 p-8 h-full relative">
      <div className="flex justify-between pb-2 mb-2 border-b">
        <div>
          <h1 className="font-semibold text-gray-900">Jane Doe</h1>
          <p className="text-xs">Online</p>
        </div>
        <div className="text-right">
          <Link
            href="/admin/conversations"
            className="text-gray-500 hover:text-blue-600 font-semibold text-sm"
          >
            View Profile
          </Link>
          <p className="text-gray-500 hover:text-gray-900 text-sm">0 Orders</p>
        </div>
      </div>
      <div className="overflow-auto h-[750px] scrollbar-hide">
        <div className="flex flex-col gap-y-2">
          {messages.map((message, i) => (
            <div key={i} className="flex justify-end gap-y-4">
              <div className="bg-blue-500 text-white rounded-lg p-2 ">
                {message}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end gap-y-4">
          <div className="border-2 text-gray-900 rounded-lg p-2 w-full h-12 flex justify-between">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full h-full focus:outline-none"
            />
            <button
              onClick={() => {
                setMessages([...messages, message]);
                setMessage("");
              }}
              className="bg-blue-500 text-white rounded-lg px-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
