import React from "react";
import Button from "@/components/button/Button";
const Header = ({ label }: { label: string }) => {
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-primary-text text-xl font-semibold">{label}</h1>
      </div>
      <div>
        <Button label="Click" bgColor="bg-red-100" />
      </div>
    </div>
  );
};

export default Header;
