import PageLayout from "@/components/layout/PageLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/sidebar/Followbar";

const page = () => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent="hello this is Profile page"
      RightComponent={<Followbar />}
    />
  );
};

export default page;
