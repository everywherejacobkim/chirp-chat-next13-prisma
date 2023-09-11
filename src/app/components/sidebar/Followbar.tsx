import React from "react";

const Followbar = () => {
  return (
    <div className="w-full mt-10">
      <div className="bg-primary-60 p-4 mx-4 rounded-lg">
        <h1 className="text-white">People you may know</h1>
        <div className="flex flex-col gap-4 mt-2">
          {/* {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Followbar;
