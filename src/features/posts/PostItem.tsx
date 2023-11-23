import React, { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import useLoginModal from "@/libs/hooks/useLoginModal";
import useLike from "@/libs/hooks/useLike";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "@/components/avatar/Avatar";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const PostItem = ({
  userId,
  data,
}: {
  userId: string;
  data: Record<string, any>;
}) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId});
  const [clicked, setClicked] = useState(false);

  const goToUserProfile = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${userId}`);
    },
    [router, userId]
  );

  const gotoPostDetail = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/posts/${data.id}`);
    },
    [router, data.id]
  );

  const onLike = useCallback(
    async (event: any) => {
      event.stopPropagation();

      if (!currentUser) {
       return loginModal.onOpen();
      }
      await toggleLike();
      await setClicked(true);
    },
    [loginModal, currentUser, toggleLike, hasLiked]
  );

  const LikeIcon = hasLiked ? FaHeart : AiOutlineHeart;

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt as string));
  }, [data?.createdAt]);

  return (
    <div
      onClick={gotoPostDetail}
      className="border-b-2 border-gray-200 bg-white cursor-pointer hover:bg-gray-100 transition"
    >
      <div className="flex items-center">
        <Avatar userId={data.user.id} />
        <div className="w-full p-2 flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <span className="flex items-center gap-0.5">
              <p className="text-xs text-gray-700" onClick={goToUserProfile}>
                {data.user.name}
              </p>
              <p className="text-xs text-gray-500" onClick={goToUserProfile}>
                @{data.user.username}
              </p>
            </span>
            <p className="text-xs text-gray-500">{createdAt}</p>
          </div>
          <div className="flex gap-6 justify-between items-center -mt-0.5">
            <p className="text-xs font-semibold text-gray-600">
              {data.content}
            </p>
            <div className="flex gap-1">
              <div className="flex gap-0.5 items-center cursor-pointer transition hover:text-primary-60 hover:font-semibold">
                <AiOutlineMessage size={12} className="text-gray-600" />
                <p className="text-xs text-gray-500">
                  {data.comments?.length || 0}
                </p>
              </div>
              <div
                onClick={onLike}
                className="flex gap-0.5 items-center cursor-pointer transition hover:text-primary-60 hover:font-semibold"
              >
                { clicked ? <FaHeart color="#f29f07" size={12} /> : <AiOutlineHeart size={12} className="text-gray-500"/> }
                <p className="text-xs text-gray-500">
                {data.likedIds.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
