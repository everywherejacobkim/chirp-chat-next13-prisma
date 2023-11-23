import toast from "react-hot-toast";
import useCurrentUser from "./useCurrentUser"
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";
import axios from "axios";

const useLike = ({ postId, userId }: {
    postId: string
    userId?: string
}) => {
    const { data: currentUser } = useCurrentUser();
    const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
    const { mutate: mutateFetchedPosts } = usePosts(userId);

    const loginModal = useLoginModal();

    const hasLiked = fetchedPost?.likedIds?.includes(currentUser?.id);

    const toggleLike = async () => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let request;

            if (hasLiked) {
                request = () => axios.delete('/api/like', { data: { postId } });
            } else {
                request = () => axios.post('/api/like', { postId });
            }

            await request();
            mutateFetchedPost();
            mutateFetchedPosts();

            toast.success('Success');
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    return {
        hasLiked, toggleLike
    }
}

export default useLike;



// import { useCallback, useMemo } from "react";
// import { toast } from "react-hot-toast";
// import useCurrentUser from "./useCurrentUser";
// import useLoginModal from "./useLoginModal";
// import usePost from "./usePost";
// import usePosts from "./usePosts";
// import axios from "axios";

// const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
//   const { data: currentUser } = useCurrentUser();
//   const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
//   const { mutate: mutateFetchedPosts } = usePosts(userId);

//   const loginModal = useLoginModal();

//   const hasLiked = useMemo(() => {
//     const list = fetchedPost?.likedIds || [];

//     return list.includes(currentUser?.id);
//   }, [fetchedPost, currentUser]);

//   const toggleLike = useCallback(async () => {
//     if (!currentUser) {
//       return loginModal.onOpen();
//     }

//     try {
//       let request;

//       if (hasLiked) {
//         request = () => axios.delete('/api/like', { data: { postId } });
//       } else {
//         request = () => axios.post('/api/like', { postId });
//       }

//       await request();
//       mutateFetchedPost();
//       mutateFetchedPosts();

//       toast.success('Success');
//     } catch (error) {
//       toast.error('Something went wrong');
//     }
//   }, [currentUser, hasLiked, postId, mutateFetchedPosts, mutateFetchedPost, loginModal]);

//   return {
//     hasLiked,
//     toggleLike,
//   }
// }

// export default useLike;