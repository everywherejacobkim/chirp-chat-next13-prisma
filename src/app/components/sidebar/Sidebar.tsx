"use client";
import React, { useCallback, useEffect, useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import { RiNotification3Fill, RiLogoutBoxFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import useLoginModal from "@/libs/hooks/useLoginModal";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const currentUser = useCurrentUser();
  const [currentUserStatus, setCurrentUserStatus] = useState(null);

  useEffect(() => {
    setCurrentUserStatus(currentUser);
  }, [currentUser]);

  console.log("currentUser", currentUser);

  const loginModal = useLoginModal();

  const openLoginModal = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  const items = [
    {
      name: "Home",
      icon: BsHouseFill,
      link: "/",
    },
    {
      name: "Notification",
      icon: RiNotification3Fill,
      link: "/notification",
      auth: true,
    },
    {
      name: "Profile",
      icon: FaUser,
      link: "/profile",
      auth: true,
    },
  ];

  return (
    <div className="w-full mt-10">
      <div className="pl-12">
        {items.map((item, index) => (
          <SidebarItem
            key={item.link}
            name={item.name}
            icon={item.icon}
            link={item.link}
            auth={item.auth}
          />
        ))}
        {currentUserStatus && currentUserStatus !== undefined && (
          <SidebarItem
            onClick={() => signOut()}
            name="Logout"
            icon={RiLogoutBoxFill}
          />
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={openLoginModal}
          className="bg-primary-10 px-4 py-2 w-2/3 rounded-lg font-semibold"
        >
          Chirp
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
