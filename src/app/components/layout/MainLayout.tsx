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
    <div className="flex flex-col justify-between gap-2">
      <div>{TopComponent}</div>
      <div>{MainComponent}</div>
      <div>{BottomComponent}</div>
    </div>
  );
};

export default MainLayout;
