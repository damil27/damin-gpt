"use client";

import { useSession, signOut, getProviders } from "next-auth/react";

const ChatSideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-900 text-white">
      {session?.user && (
        <button
          type="button"
          className="bg-gray-700 text-white py-2 px-2 rounded-md"
          onClick={() => signOut()}
        >
          LogOut
        </button>
      )}
    </div>
  );
};

export default ChatSideBar;
