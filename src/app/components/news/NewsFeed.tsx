"use client";
import React from "react";
import usePosts from "@/libs/hooks/usePosts";
import PostItem from "./PostItem";

const NewsFeed = ({ userId }: { userId: string }) => {
  const data = usePosts(userId);
  const posts = data?.data?.posts;

  console.log("This is fetched posts!!", posts);

  return (
    <>
      {posts &&
        posts.map(
          (post: {
            id: string;
            content: string;
          }) => (
            <PostItem userId={userId} key={post.id} data={post} />
          )
        )}
    </>
  );
};

export default NewsFeed;
