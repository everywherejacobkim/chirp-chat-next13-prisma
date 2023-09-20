import useUser from "@/libs/hooks/useUser";
import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";

const UserHero = ({userId}) => {
    const { data: fetchedUser} = useUser(userId)

  return (
        <div className="bg-primary-20/50 h-44">
            <div>
                {fetchedUser?.coverImage && (
                    <Image
                    src={fetchedUser.converImage}
                    fill
                    alt="profile cover image"
                    style={{objectFit: "cover"}}
                    />
                )}
            </div>
        </div>
  );
};

export default UserHero;
