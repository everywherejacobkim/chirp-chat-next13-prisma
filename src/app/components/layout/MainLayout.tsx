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
    <div className="flex flex-col gap-2 bg-primary-10">
      <div>{TopComponent}</div>
      <div>{MainComponent}</div>
      <div>{BottomComponent}</div>
    </div>
  );
};

export default MainLayout;
