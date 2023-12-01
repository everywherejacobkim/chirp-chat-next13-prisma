import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { useSession } from "next-auth/react";
import useLoginModal from "@/libs/hooks/useLoginModal";
import { BsDot } from "react-icons/bs"

const SidebarItem = ({
  name,
  icon: Icon,
  link,
  onClick,
  auth,
  alert
}: {
  name: string;
  icon: IconType;
  link?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (!session && auth) {
      loginModal.onOpen();
    } else if (link) {
      router.push(link);
    }
  }, [onClick, link, router, session]);

  return (
    <div
      className={link === "/chat" ? "flex items-center cursor-not-allowed" : "flex items-center cursor-pointer" }
      onClick={link === "/chat" ? undefined : handleClick}
    >
      <div className="relative flex gap-2 py-4">
        <Icon className="text-2xl text-black" />
        {alert ? <BsDot className="text-[#C4E64D] absolute -top-4 -left-4" size={70} /> : null}
        <h1 className="pt-1">{name}</h1>
      </div>
    </div>
  );
};

export default SidebarItem;

