"use client";
import { useRouter } from "next/navigation";
import useCurrentUser from "../libs/hooks/useCurrentUser";

const Page = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  console.log("currentUser", currentUser);

  const userId = currentUser?.data.id;

  router.push(`/users/${userId}`);

  return null;
};

export default Page;
