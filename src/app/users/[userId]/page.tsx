import PageLayout from "@/components/layout/PageLayout";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import Header from "@/components/header/Header";
import UserProfile from "@/components/user/UserProfile";
import NewsFeed from "@/components/news/NewsFeed";

const page = ({params}: {
  params: {userId: string}
}) => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Back" isWelcomeShow={false} />}
          MainComponent={<UserProfile params={params} />}
          BottomComponent={<NewsFeed userId={params.userId} />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
};

export default page;
