import React from 'react';
import usePost from '@/libs/hooks/usePost';
import { ClipLoader } from 'react-spinners';
import PostItem from './PostItem';
import CommentForm from '@/components/form/CommentForm';
import CommentFeed from '@/features/posts/CommentFeed';

const PostView = ({query}: {
    query: any
}) => {
    const postId = query;

    const { data: fetchedPost, isLoading } = usePost(postId as string);

    if(isLoading || !fetchedPost) {
        return (
            <div className="flex justify-center items-center h-full p-5">
                <ClipLoader  />
            </div>
        )
    }

    const postData = fetchedPost.post;
    const user = fetchedPost.post.user;

  return (
    <div>
        <PostItem data={postData} userId={user.id}/>
        <CommentForm postId={postId} />
        <CommentFeed comments={fetchedPost?.comments}/>
    </div>
  )
}

export default PostView


