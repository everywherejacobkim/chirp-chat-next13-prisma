"use client";
import React, { useCallback } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { RiNotification3Line, RiLogoutBoxFill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import useLoginModal from "@/libs/hooks/useLoginModal";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const loginModal = useLoginModal();

  const openLoginModal = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  const items = [
    {
      name: "Home",
      icon: BiHomeSmile,
      link: "/",
    },
    {
      name: "Notification",
      icon: RiNotification3Line,
      link: "/notification",
      auth: true,
    },
    {
      name: "Profile",
      icon: FiUser,
      link: "/profile",
      auth: true,
    },
  ];

  return (
    <div className="w-full pt-40 bg-primary-10">
      <div className="pl-10">
        {items.map((item, index) => (
          <SidebarItem
            key={item.link}
            name={item.name}
            icon={item.icon}
            link={item.link}
            auth={item.auth}
          />
        ))}
        {currentUser && (
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
          className="bg-primary-30 text-primary-10 px-4 py-2 w-2/3 rounded-lg font-semibold"
        >
          Chirp
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
