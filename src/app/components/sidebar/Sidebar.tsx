import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { RiNotification3Fill, RiLogoutBoxFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

type Props = {};

const Sidebar = (props: Props) => {
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
    },
    {
      name: "Profile",
      icon: FaUser,
      link: "/profile",
    },
    {
      name: "Logout",
      icon: RiLogoutBoxFill,
      link: "/login",
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
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-primary-10 px-4 py-2 w-2/3 rounded-lg font-semibold">
          Chirp
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
