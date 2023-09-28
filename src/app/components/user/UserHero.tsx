import useUser from "@/libs/hooks/useUser";
import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";
import { useSession } from "next-auth/react";

const UserHero = ({ fetchedUser }: { fetchedUser: any }) => {
  const { data: session } = useSession();
  return (
        <div className="h-72 relative">
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
                  <Avatar userId={fetchedUser.id} isLarge/>
                </div>
            </div>
            <div className="flex items-center justify-between">           
            <div className="p-8">
                <p className="text-xl font-semibold ">
                  {fetchedUser.name}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  @ {fetchedUser.username}
                </p>
                <div className="flex gap-2">
                <div className="flex items-center mt-2">
                  <p>
                    {fetchedUser?.followingIds?.length}
                  </p>
                  <p className="text-sm text-gray-500">
                    &nbsp;Following
                    </p>
                </div>
                <div className="flex items-center mt-2">
                  <p>
                    {fetchedUser?.followersCount || 0 }
                  </p>
                  <p className="text-sm text-gray-500">
                    &nbsp;Followers
                    </p>
                </div>
                </div>
            </div>
            <div className="px-8 -mt-4">
            <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
            { fetchedUser?.id === session?.user?.id ?
              <p>Edit</p>
              : <p>Follow</p>
            }
              </button>
            </div>
            </div>
        </div>
  );
};

export default UserHero;
