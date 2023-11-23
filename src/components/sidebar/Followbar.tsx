"use client";
import React from "react";
import { useSession } from "next-auth/react";
import useUsers from "@/libs/hooks/useUsers";
import Avatar from "@/components/avatar/Avatar";

const Followbar = () => {
  const { data: users = [] } = useUsers();
  const { data: session } = useSession();

  const filteredUsers = users.filter(
    (user: Record<string, any>) => user.name !== session?.user?.name
  );

  const shuffledUsers = [...filteredUsers];
  for (let i = shuffledUsers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
  }

  const randomUsers = shuffledUsers.slice(0, 4);

  return (
    <div className="w-full mt-10">
      <div className="bg-primary-60 p-4 mx-4 rounded-xl shadow-lg">
        {session ? (
          <>
            <h1 className="text-white">People you may know</h1>
            <div className="flex flex-col gap-4 mt-2">
              {randomUsers.map((user: Record<string, any>) => (
                <div key={user.id} className="flex flex-row gap-4">
                  <Avatar userId={user.id} />
                  <div className="flex flex-col pt-1">
                    <p className="text-white font-semibold text-sm">
                      {user.name}
                    </p>
                    <p className="text-neutral-400 text-sm">@{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-white">Ready to Connect?</h1>
            <h1 className="text-white mt-2">Login to Follow Users</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Followbar;
