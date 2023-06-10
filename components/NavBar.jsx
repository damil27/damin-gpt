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
    <div className=" text-white text-center ">
      {session?.user ? (
        <button type="button" onClick={signOut} className="btn">
          logout
        </button>
      ) : (
        <div>
          {users &&
            Object.values(users).map((user) => (
              <div className="flex justify-center items-center gap-4 ">
                <button
                  type="button"
                  onClick={() => signIn(user.id)}
                  className="btn"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => signIn(user.id)}
                  className="btn"
                >
                  Sign up
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
