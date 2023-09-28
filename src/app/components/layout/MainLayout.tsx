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
    <div className="flex flex-col">
      <div>{TopComponent}</div>
      <div>{MainComponent}</div>
      <div className="absolute bottom-0 w-1/2">{BottomComponent}</div>
    </div>
  );
};

export default MainLayout;
