import React, { ReactNode } from "react";

const DashboardLayout = async ({
  LeftComponent,
  MainComponent,
  RightComponent,
}: {
  LeftComponent: ReactNode;
  MainComponent: ReactNode;
  RightComponent: ReactNode;
}) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="max-w-[240px] flex-1 hidden md:flex">{LeftComponent}</div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white flex-1">{MainComponent}</div>
      </div>
      <div className="max-w-[240px] flex-1 hidden md:flex">
        {RightComponent}
      </div>
    </div>
  );
};

export default DashboardLayout;