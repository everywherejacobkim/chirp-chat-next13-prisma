import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useEditModal from "@/libs/hooks/useEditModal";
import useFollow from "@/libs/hooks/useFollow";


const UserHero = ({ fetchedUser }: { fetchedUser: any }) => {
  const { data: session } = useSession();

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(fetchedUser.id);

  return (
    <div className="h-72 relative mb-3">
      <div className="bg-gray-100 h-40">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser.coverImage}
            alt="profile-cover-image"
            style={{ objectFit: "cover" }}
            fill
          />
        )}
        <div className="absolute bottom-[30%]">
          <Avatar userId={fetchedUser.id} isLarge />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-8">
          <p className="text-xl font-semibold ">{fetchedUser.name}</p>
          <p className="text-sm text-gray-600 font-semibold">
            @ {fetchedUser.username}
          </p>
          {fetchedUser.bio && (
            <p className="text-sm text-gray-600">{fetchedUser.bio}</p>
          )}
          <div className="flex gap-2">
            <div className="flex items-center mt-2">
              <p>{fetchedUser?.followingIds?.length}</p>
              <p className="text-sm text-gray-500">&nbsp;Following</p>
            </div>
            <div className="flex items-center mt-2">
              <p>{fetchedUser?.followersCount || 0}</p>
              <p className="text-sm text-gray-500">&nbsp;Followers</p>
            </div>
          </div>
        </div>
        <div className="px-8 -mt-4">
          {fetchedUser?.id === session?.id ? (
            <button
              onClick={editModal.onOpen}
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Edit
            </button>
          ) : (
            <button 
            onClick={toggleFollow}
            className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
            {isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHero;
