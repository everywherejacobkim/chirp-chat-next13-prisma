"use client";
import React from "react";
import useUsers from "@/libs/hooks/useUsers";
import Avatar from "@/components/avatar/Avatar";

const Followbar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-10 text-white">
      <div className="bg-primary-30/30 p-4 mx-4 rounded-lg">
        <h1 className="">People you may know</h1>
        <div className="flex flex-col gap-4 mt-2">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Followbar;
