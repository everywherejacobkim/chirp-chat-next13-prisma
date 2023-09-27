"use client";
import useUser from "@/libs/hooks/useUser";
import UserHero from "./UserHero";
import {ClipLoader} from "react-spinners";

const UserProfile = ({params}: {params: string}) => {
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
  <div>
    <UserHero fetchedUser={fetchedUser}/>
    <p>
      {fetchedUser.name}
    </p>
  </div>
  )
};

export default UserProfile;
