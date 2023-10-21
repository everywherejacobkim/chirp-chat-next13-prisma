import { useMemo, useCallback, use } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";
import toast from "react-hot-toast";
import axios from "axios";

const useFollow = (userId: string) => {
  console.log("하이하이하이userId", userId);

  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const loginModal = useLoginModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [currentUser?.followingIds, userId]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    try {
      let request;
      if (isFollowing) {
        request = () => axios.delete("/api/follow/", { data: { userId } });
      } else {
        request = () => axios.post(`/api/follow?userId=${userId}`);
      }

      await request();
      mutateCurrentUser();
      mutateFetchedUser();

      toast.success("👍 Success!");
    } catch (error) {
      toast.error("🙅‍♂️ Something is wrong..");
    }
  }, [
    currentUser,
    isFollowing,
    loginModal,
    mutateCurrentUser,
    mutateFetchedUser,
    userId,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
