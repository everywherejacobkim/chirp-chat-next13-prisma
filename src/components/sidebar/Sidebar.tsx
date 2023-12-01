"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useLoginModal from "@/libs/hooks/useLoginModal";
import { BiHomeSmile } from "react-icons/bi";
import { RiNotification3Line, RiLogoutBoxFill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { useSession, signOut } from "next-auth/react";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import logo from "public/images/icons/chirp_logo2.png";

const Sidebar = () => {
  const { data: session, status } = useSession();
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
      alert: currentUser?.hasNotification,
    },
    {
      name: "Chat",
      icon: IoChatbubblesOutline,
      link: "/chat",
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
    <div className="w-full bg-white">
      <Link href="/">
        <div className="flex flex-col justify-center items-center">
          <Image src={logo} width={100} height={100} alt="logo" />
          <h1 className="font-semibold -mt-5 mb-5">CHIRPCHAT</h1>
        </div>
      </Link>
      <div className="pl-10">
        {items.map((item, index) => (
          <SidebarItem
            key={item.link}
            name={item.name}
            icon={item.icon}
            link={item.link}
            auth={item.auth}
            alert={item.alert}
          />
        ))}
        {session && status == "authenticated" && (
          <SidebarItem
            onClick={() => signOut()}
            name="Logout"
            icon={RiLogoutBoxFill}
          />
        )}
      </div>
      {!session && (
        <div className="flex justify-center mt-10">
          <button
            onClick={openLoginModal}
            className="bg-primary-30 text-primary-10 px-4 py-2 w-2/3 rounded-lg font-semibold"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
