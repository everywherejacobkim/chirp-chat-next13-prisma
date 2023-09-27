import useUser from "@/libs/hooks/useUser";
import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";

const UserHero = ({fetchedUser}: {fetchedUser: any}) => {
console.log("이것이다", fetchedUser);
  return (
        <div className="bg-white h-60">
            <div>
                {fetchedUser?.coverImage && (
                    <Image
                    src={fetchedUser.coverImage}
                    fill
                    alt="profile cover image"
                    style={{objectFit: "cover"}}
                    />
                )}
                <div className="px-6 py-4">
                <Avatar userId={fetchedUser.id} isLarge/>
                </div>
            </div>
        </div>
  );
};

export default UserHero;
