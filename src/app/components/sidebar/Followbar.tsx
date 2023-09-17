"use client";
import React from "react";
import useUsers from "@/libs/hooks/useUsers";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import Avatar from "@/components/avatar/Avatar";

const Followbar = () => {
  const { data: users = [] } = useUsers();
  const { data: currentUser } = useCurrentUser();

  const filteredUsers = users.filter(
    (user: Record<string, any>) => user.name !== currentUser?.name
  );

  return (
    <div className="w-full mt-10">
      <div className="bg-primary-60 p-4 mx-4 rounded-lg">
        {currentUser ? (
          <>
            <h1 className="text-white">People you may know</h1>
            <div className="flex flex-col gap-4 mt-2">
              {filteredUsers.map((user: Record<string, any>) => (
                <div key={user.id} className="flex flex-row gap-4">
                  <Avatar userId={user.id} />
                  <div className="flex flex-col">
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
            <h1 className="text-white mt-2">Log In to Follow Users</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Followbar;
