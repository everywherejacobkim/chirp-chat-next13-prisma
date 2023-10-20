"use client";
import React from "react";
import usePosts from "@/libs/hooks/usePosts";
import PostItem from "./PostItem";

const NewsFeed = ({ userId }: { userId: string }) => {
  const data = usePosts(userId);
  const posts = data?.data?.posts;

  return (
    <div className="overflow-auto w-full h-screen">
      {posts &&
        posts.map(
          (
            post: {
              id: string;
              content: string;
            },
            index: number
          ) => <PostItem userId={userId} key={index} data={post} />
        )}
    </div>
  );
};

export default NewsFeed;
