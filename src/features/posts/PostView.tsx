import React from 'react';
import usePost from '@/libs/hooks/usePost';
import { ClipLoader } from 'react-spinners';
import PostItem from './PostItem';
import NewChirpForm from '@/components/form/NewChirpForm';

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
        <NewChirpForm postId={postId} isComment={true} />
    </div>
  )
}

export default PostView


