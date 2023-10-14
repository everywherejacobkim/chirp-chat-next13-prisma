import React from "react";
import { useRouter } from "next/router";

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
  return <>hello</>;
};

export default PostItem;
