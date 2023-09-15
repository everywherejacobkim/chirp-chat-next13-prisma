"use client";
import React from "react";
import useCurrentUser from "@/libs/hooks/useCurrentUser";

const Header = ({ label }: { label: string }) => {
  const { data: currentUser } = useCurrentUser();
  console.log("This is current user:", currentUser);
  if (!currentUser) {
    return (
      <div className="border-b-[1px] bg-primary-10 border-neutral-800 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          <h3 className="text-primary-text">Loading...</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="border-b-[1px] bg-primary-10 border-neutral-800 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
        <h3 className="text-primary-text">
          Welcome back {currentUser?.data?.name}{" "}
        </h3>
      </div>
    </div>
  );
};

export default Header;
