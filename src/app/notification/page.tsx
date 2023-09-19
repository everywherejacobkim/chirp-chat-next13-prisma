import PageLayout from "@/components/layout/PageLayout";
import Sidebar from "@/components/sidebar/Sidebar";

type Props = {};

const page = (props: Props) => {
  return (
    <PageLayout
      LeftComponent={<Sidebar />}
      MainComponent="hello this is main"
    />
  );
};

export default page;
