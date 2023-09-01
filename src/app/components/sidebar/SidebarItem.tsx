import React from "react";
import { IconType } from "react-icons";

const SidebarItem = ({
  name,
  icon: Icon,
  link,
  onClick,
}: {
  name: string;
  icon: IconType;
  link: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex items-center">
      <div className="relative flex gap-2 justify-center items-center p-4 cursor-pointer">
        <Icon className="text-2xl text-white" />
        <h1 className="pt-1">{name}</h1>
      </div>
    </div>
  );
};

export default SidebarItem;
