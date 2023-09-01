"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <DashboardLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Home" />}
          MainComponent="Main"
          BottomComponent="Footer"
        />
      }
      RightComponent={<Followbar />}
    />
  );
}

// People you may know
