import PageLayout from "@/components/layout/PageLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";
import ChatDrawer from "@/components/drawer/ChatDrawer";

const page = () => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent={<ChatDrawer />}
      RightComponent={<Followbar />}
    />
  );
};

export default page;
