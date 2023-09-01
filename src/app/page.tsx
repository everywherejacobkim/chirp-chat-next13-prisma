"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";

export default function Home() {
  return (
    <DashboardLayout
      LeftComponent={<Sidebar />}
      MainComponent="This is for Main"
      RightComponent={<Followbar />}
    />
  );
}

// People you may know
