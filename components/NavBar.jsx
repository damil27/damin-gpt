"use client";

import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setUsers(response);
    };
    setProvider();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center gap-12 mt-20">
      {session?.user ? (
        <button
          type="button"
          onClick={signOut}
          className="bg-slate-700 text-white px-8 py-4 border rounded-md"
        >
          logout
        </button>
      ) : (
        <div>
          {users &&
            Object.values(users).map((user) => (
              <button
                type="button"
                onClick={() => signIn(user.id)}
                className="bg-slate-700 text-white px-8 py-4 border rounded-md"
              >
                Login
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
