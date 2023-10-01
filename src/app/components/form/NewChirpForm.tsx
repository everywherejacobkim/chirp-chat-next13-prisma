"use client";
import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import useCurrentUser from "@/libs/hooks/useCurrentUser";
import Button from "../button/Button";
import useLoginModal from "@/libs/hooks/useLoginModal";
import useRegisterModal from "@/libs/hooks/useRegisterModal";

const NewChirpForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { data: currentUser } = useCurrentUser();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div>
      {currentUser?.user ? (
        <form className="flex flex-col gap-2 border-b px-4 py-2">
          <div className="flex gap-4">
            <Avatar userId={currentUser?.data?.id} isLarge />
            <textarea
              className="flex-grow resize-none overflow-hidden px-2 pt-10 outline-none rounded"
              placeholder="Share your chirpy moments!"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="text-white font-bold px-4 py-2 bg-primary-30 rounded-lg">
              Chirp
            </button>
          </div>
        </form>
      ) : (
        <Button label="Login" onClick={loginModal.onOpen} />
      )}
    </div>
  );
};

export default NewChirpForm;
