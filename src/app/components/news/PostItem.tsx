import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import useLoginModal from "@/libs/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";

const PostItem = ({
  userId,
  key,
  data,
}: {
  userId: string;
  key: string;
  data: Record<string, unknown>;
}) => {
  const router = useRouter();

  const { data: currentUser } = useCurrentUser();

  const loginModal = useLoginModal();

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
    (event: any) => {
      event.stopPropagation();
      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt as string));
  }, [data?.createdAt]);

  return (
    <div
      onClick={gotoPostDetail}
      className="border-b-2 border-gray-200 p-4 cursor-pointer hover:bg-gray-100 transition"
    >
      {data?.content}
    </div>
  );
};

export default PostItem;
