"use client"
import { useParams } from 'next/navigation'
import PageLayout from "@/components/layout/PageLayout";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PostView from "@/features/posts/PostView";

const Page = () => {
  const params = useParams();
  const query = params.postId

  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Chirp" isWelcomeShow={false} />}
          MainComponent={<PostView query={query} />}
          BottomComponent={<Footer />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
};

export default Page;
