import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { useSession } from "next-auth/react";
import useLoginModal from "@/libs/hooks/useLoginModal";

const SidebarItem = ({
  name,
  icon: Icon,
  link,
  onClick,
  auth,
}: {
  name: string;
  icon: IconType;
  link?: string;
  onClick?: () => void;
  auth?: boolean;
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (!session) {
      loginModal.onOpen();
    } else if (link) {
      router.push(link);
    }
  }, [onClick, link, router, session]);
  return (
    <div className="flex items-center" onClick={handleClick}>
      <div className="relative flex gap-2 py-4 cursor-pointer">
        <Icon className="text-2xl text-black" />
        <h1 className="pt-1">{name}</h1>
      </div>
    </div>
  );
};

export default SidebarItem;
