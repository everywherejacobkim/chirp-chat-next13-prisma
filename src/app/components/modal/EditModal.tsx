"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import useUser from "@/libs/hooks/useUser";
import useEditModal from "@/libs/hooks/useEditModal";
import Modal from "./Modal";
import Input from "./Input";

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.data?.id);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [bio, setBio] = useState("");

  const editModal = useEditModal();

  useEffect(() => {
    setName(currentUser?.data?.name);
    setUsername(currentUser?.data?.username);
    setProfileImage(currentUser?.data?.profileImage);
    setCoverImage(currentUser?.data?.coverImage);
    setBio(currentUser?.data?.bio);
  }, [currentUser]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch("/api/edit", {
        name,
        username,
        profileImage,
        coverImage,
        bio,
      });
      mutateFetchedUser();
      toast.success("Profile updated successfully!");

      editModal.onClose();
    } catch (error) {
      toast.error("Oops.. Please try again!");
    } finally {
      setIsLoading(false);
    }
  }, [
    name,
    username,
    profileImage,
    coverImage,
    bio,
    mutateFetchedUser,
    editModal,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        disabled={isLoading}
      />
      <Input
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        disabled={isLoading}
      />
      <Input
        label="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Introduce yourself!"
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      title="Edit Profile"
      actionLabel="Save"
      body={bodyContent}
    />
  );
};

export default EditModal;
