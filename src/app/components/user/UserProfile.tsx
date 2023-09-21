"use client";
import useUser from "@/libs/hooks/useUser";
import UserHero from "./UserHero";

const UserProfile = ({params}: {params: {id: string}}) => {
  const userId = params.id;

  const { data: fetchedUser, isLoading } = useUser(userId as string);
  console.log(fetchedUser);
  return (
  <div>
    <UserHero />

  </div>
  )
};

export default UserProfile;
