"use client";
import useUser from "@/libs/hooks/useUser";
import UserHero from "./UserHero";
import {ClipLoader} from "react-spinners";

const UserProfile = ({ params }: { params: { userId: string } }) => {
  const userId = params.userId;

  const { data: fetchedUser, isLoading } = useUser(userId);
 if (isLoading || !fetchedUser) {
  return (
    <div className="flex justify-center h-full">
      <ClipLoader color="green" size={50} />
    </div>
  )
 }
  return (
  <div className="rounded-lg shadow-lg overflow-hidden">
    <UserHero fetchedUser={fetchedUser}/>
  </div>
  )
};

export default UserProfile;
