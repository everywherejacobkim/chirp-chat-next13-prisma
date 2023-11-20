"use client"
import PageLayout from "@/components/layout/PageLayout";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import Header from "@/components/header/Header";
import UserProfile from "@/components/user/UserProfile";
import PostItem from "@/components/news/PostItem";
import Footer from "@/components/footer/Footer";

const page = ({params}: {
  params: {userId: string}
}) => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Back" isWelcomeShow={false} />}
          // MainComponent={<PostItem />}
          MainComponent="Hello"
          BottomComponent={<Footer />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
};

export default page;