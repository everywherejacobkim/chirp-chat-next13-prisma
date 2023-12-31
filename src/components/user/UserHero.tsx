import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";
import useEditModal from "@/libs/hooks/useEditModal";
import useFollow from "@/libs/hooks/useFollow";
import useCurrentUser from "@/libs/hooks/useCurrentUser";


const UserHero = ({ fetchedUser }: { fetchedUser: any }) => {
  const {data: currentUser} = useCurrentUser();

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
        <div className="flex gap-2 px-2">
          {fetchedUser?.id === currentUser?.data?.id ? (
            <button
              onClick={editModal.onOpen}
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Edit
            </button>
          ) : (
            <button 
            onClick={toggleFollow}
            className="bg-lime-500 hover:bg-lime-600 text-white border-2 hover:border font-bold py-2 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
            {isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
          <button
            className="bg-[#FBF462] hover:bg-yellow-400 text-lime-500 hover:text-white border-2 hover:border font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
