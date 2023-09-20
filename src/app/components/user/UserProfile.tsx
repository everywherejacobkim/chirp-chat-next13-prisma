"use client";
import { useParams } from "next/navigation";
import useUser from "@/libs/hooks/useUser";
import UserHero from "./UserHero";

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  return (
  <div>
    <UserHero userId={userId} />

  </div>
  )
};

export default UserProfile;
