import React, { ReactNode } from "react";

const PageLayout = async ({
  LeftComponent,
  MainComponent,
  RightComponent,
}: {
  LeftComponent: ReactNode;
  MainComponent: ReactNode;
  RightComponent: ReactNode;
}) => {
  return (
    <div className="max-w-7xl w-full h-screen flex justify-center mx-auto gap-5 bg-white overflow-auto">
      <div className="max-w-[200px] flex-1 hidden md:flex">{LeftComponent}</div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">{MainComponent}</div>
      </div>
      <div className="max-w-[240px] flex-1 hidden md:flex">
        {RightComponent}
      </div>
    </div>
  );
};

export default PageLayout;
