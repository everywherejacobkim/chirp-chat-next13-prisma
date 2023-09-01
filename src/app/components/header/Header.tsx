import React from "react";

const Header = ({ label }: { label?: string }) => {
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      header
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
