import { useCallback } from "react";
import Image from "next/image";
import useUser from "@/libs/hooks/useUser";
import { useRouter } from "next/navigation";
import userImagePlaceholder from "public/images/icons/placeholder-user-no.png";

const Avatar = ({
  userId,
  isLarge,
  hasBorder,
}: {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);


  
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div onClick={onClick} className="hover:cursor-pointer">
      {fetchedUser?.profileImage ? (
        <div
          className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
        >
          <Image
            fill
            style={{
              objectFit: "cover",
              borderRadius: "100%",
            }}
            alt="Avatar"
            src={fetchedUser.profileImage}
          />
        </div>
      ) : (
        <div 
        className={`
        ${isLarge ? "h-44" : "h-12"}
        ${isLarge ? "w-44" : "w-12"}
        w-10 h-10
        `}>
            <Image
              src={userImagePlaceholder}
              alt="user-placeholder"/>
        </div>
      )}
    </div>
  );
};

export default Avatar;
