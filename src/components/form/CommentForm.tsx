import React, { useState, useCallback } from "react";
import Avatar from "../avatar/Avatar";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import Button from "../button/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import usePosts from "@/libs/hooks/usePosts";
import usePost from "@/libs/hooks/usePost";

const CommentForm = ({
  postId,
}: {
  postId?: string;
}) => {
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = `/api/comments?postId=${postId}`;
      await axios.post(url, { body });

      toast.success("Chirp created");
      setBody("");
      mutatePosts();
      mutatePost();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, postId, mutatePost]);

  return (
    <div>
      <form className="flex flex-col gap-2 border-b py-2">
        <div className="flex gap-2">
          <Avatar userId={currentUser?.data?.id} />
          <div className="w-full flex">
            <textarea
              className="flex-grow resize-none overflow-hidden outline-none rounded text-xs pt-4"
              placeholder="Add your chirpy comments!"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onClick={() => {
                if (!currentUser?.data?.id) {
                  toast.success("Login to post a chirp!");
                }
              }}
            />
          <div className="flex">
            <button
              className="font-bold text-sm px-3 py-2 bg-white text-primary-30 border-2 border-primary-30 rounded-lg"
              disabled={isLoading || !body}
              onClick={onSubmit}
            >
              Chirp
            </button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
