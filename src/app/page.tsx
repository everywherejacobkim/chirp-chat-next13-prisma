import PageLayout from "@/components/layout/PageLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/header/Header";
import NewChirpForm from "@/components/form/NewChirpForm";
import NewsFeed from "@/features/posts/NewsFeed";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  let userId = "";

  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Home" isWelcomeShow={true} />}
          MainComponent={
            <div className="flex flex-col gap-5">
              <NewChirpForm />
              <NewsFeed userId={userId} />
            </div>
          }
          BottomComponent={<Footer />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
}
