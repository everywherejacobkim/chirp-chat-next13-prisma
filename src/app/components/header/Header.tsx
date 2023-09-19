"use client";
import React from "react";
import useCurrentUser from "@/libs/hooks/useCurrentUser";

const Header = ({ label }: { label: string }) => {
  const { data: currentUser, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="border-b-[1px] bg-primary-10 border-neutral-800 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          <h3 className="text-primary-text">Loading...</h3>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="border-b-[1px] bg-primary-10 border-neutral-800 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          <h3 className="text-primary-text">User not found.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b-[1px] bg-primary-10 border-neutral-800 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
        {currentUser.authenticated ? (
          <h3 className="text-primary-text">
            Welcome back {currentUser?.data?.name}{" "}
          </h3>
        ) : (
          <h3 className="text-primary-text">Login to Start Chirping</h3>
        )}
      </div>
    </div>
  );
};

export default Header;
