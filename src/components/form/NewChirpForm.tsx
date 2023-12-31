"use client";
import React, { useState, useCallback } from "react";
import Avatar from "../avatar/Avatar";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import Button from "../button/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import usePosts from "@/libs/hooks/usePosts";
import usePost from "@/libs/hooks/usePost";

const NewChirpForm = ({
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

      const url = "/api/posts";

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
      <form className="flex flex-col gap-2 border-b px-4 py-2">
        <div className="flex gap-4">
          <Avatar userId={currentUser?.data?.id} isLarge />
          <textarea
            className="flex-grow resize-none overflow-hidden px-2 pt-10 outline-none rounded"
            placeholder="Share your chirpy moments!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onClick={() => {
              if (!currentUser?.data?.id) {
                toast.success("Login to post a chirp!");
              }
            }}
          />
        </div>
        <div className="flex justify-end">
          {currentUser?.data?.id ? (
            <button
              className="text-white font-bold px-6 py-2 bg-primary-30 rounded-lg"
              disabled={isLoading || !body}
              onClick={onSubmit}
            >
              Chirp
            </button>
          ) : (
            <Button
              label="Chirp"
              disabled={!currentUser?.data?.id}
              bgColor="bg-primary-30"
              textColor="text-white"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default NewChirpForm;
