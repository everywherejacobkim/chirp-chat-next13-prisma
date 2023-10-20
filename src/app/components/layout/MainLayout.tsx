import React, { ReactNode } from "react";

const MainLayout = async ({
  TopComponent,
  MainComponent,
  BottomComponent,
}: {
  TopComponent: ReactNode;
  MainComponent: ReactNode;
  BottomComponent: ReactNode;
}) => {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div>{TopComponent}</div>
      <div className="overflow-y-auto">{MainComponent}</div>
      <div className="w-full my-4">{BottomComponent}</div>
    </div>
  );
};

export default MainLayout;
