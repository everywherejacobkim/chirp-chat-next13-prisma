import PageLayout from "@/components/layout/PageLayout";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NotificationFeed from "@/features/notifications/NotificationFeed";

const page = () => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
        TopComponent={<Header label="Back" isWelcomeShow={false} />}
        MainComponent={<NotificationFeed />}
        BottomComponent={<Footer />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
};

export default page;
