"use client";
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import useCurrentUser from '@/libs/hooks/useCurrentUser';
import useUser from "@/libs/hooks/useUser";
import useEditModal from "@/libs/hooks/useEditModal";

const EditModal = () => {
    const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(currentUser?.data?.id);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [coverImage, setCoverImage] = useState("");

    useEffect(() => {
      setName(currentUser?.name);
      setUsername(currentUser?.username);
      setProfileImage(currentUser?.profileImage)
      setCoverImage(currentUser?.coverImage)
    }, [currentUser])

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async () => {
            try {
                setIsLoading(true);
                await axios.patch('/api/edit', {
                    name,
                    username,
                    profileImage,
                    coverImage,
                })
                muteteFetchedUser();
            } catch(error) {
                toast.error("Oops.. Please try again!")
            } finally {
                setIsLoading(false);
            }
    }, [])

  return (
    <div>EditModal</div>
  )
}

export default EditModal