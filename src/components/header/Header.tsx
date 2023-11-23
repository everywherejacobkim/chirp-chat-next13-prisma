"use client";
import React from "react";
import Link from "next/link";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import { PiKeyReturnFill } from "react-icons/pi";

const Header = ({
  label,
  isWelcomeShow,
}: {
  label: string;
  isWelcomeShow?: boolean;
}) => {
  const { data: currentUser, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="border-b-[1px] bg-white border-neutral-800 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          <h3 className="text-primary-text">Loading...</h3>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="border-b-[1px] bg-white border-neutral-800 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          <h3 className="text-primary-text">User not found.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-white pt-10">
      {isWelcomeShow ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
          {currentUser.authenticated ? (
            <h3 className="text-primary-text">
              Welcome back, {currentUser?.data?.name}{" "}
            </h3>
          ) : (
            <h3 className="text-primary-text">Login to Start Chirping</h3>
          )}
        </div>
      ) : (
 
          <Link href="/">
           <div className="flex gap-1 items-end">
            <PiKeyReturnFill size={32} className="text-primary-60" />
              <h3 className="text-primary-text text-lg font-semibold">{label}</h3>
           </div>
          </Link>
      )}
    </div>
  );
};

export default Header;
