import PageLayout from "@/components/layout/PageLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/header/Header";
import { NewChirpForm } from "./components/form/NewChirpForm";
import Footer from "./components/footer/Footer";

export default async function Home() {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={
        <MainLayout
          TopComponent={<Header label="Home" isWelcomeShow={true} />}
          MainComponent={<NewChirpForm />}
          BottomComponent={<Footer />}
        />
      }
      RightComponent={<Followbar />}
    />
  );
}

// People you may know
