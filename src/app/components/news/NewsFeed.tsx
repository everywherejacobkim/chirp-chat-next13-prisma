"use client";
import React from "react";
import usePosts from "@/libs/hooks/usePosts";
import PostItem from "./PostItem";

const NewsFeed = ({ userId }: { userId: string }) => {
  const { data: posts = [] } = usePosts(userId);

  console.log("This is fetched posts!!", posts);

  return (
    <>
      {posts.map((post: { id: string }) => {
        <PostItem userId={userId} key={post.id} data={post} />;
      })}
    </>
  );
};

export default NewsFeed;
