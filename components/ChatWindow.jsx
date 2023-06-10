"use client";
import { useState } from "react";
import { streamReader } from "openai-edge-stream";

const ChatWindow = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = response.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    await streamReader(reader, (message) => {
      console.log(message);
    });
  };
  return (
    <div className="flex flex-col bg-gray-700">
      <div className="flex-1">Chat window</div>
      <footer className="bg-gray-800 p-10">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
              className="w-full resize-none text-white bg-gray-700 rounded-md p-2"
            />
            <button className="btn" type="submit">
              Send
            </button>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default ChatWindow;
