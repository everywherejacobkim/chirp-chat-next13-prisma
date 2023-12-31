"use client";
import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import useLoginModal from "@/libs/hooks/useLoginModal";
import useSignUpModal from "@/libs/hooks/useRegisterModal";
import Input from "./Input";
import Modal from "./Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useSignUpModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Logged in");

      loginModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, loginModal]);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="For Testing: user@test.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="For Testing: chirpchat"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Don&rsquo;t have an account?{" "}
        <span
          onClick={onToggle}
          className="
            text-lime-50
            ml-1
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      title="Login"
      body={bodyContent}
      actionLabel="Sign in"
      footer={footerContent}
      disabled={isLoading}
    />
  );
};

export default LoginModal;
