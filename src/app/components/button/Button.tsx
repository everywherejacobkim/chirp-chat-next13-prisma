import React from "react";

const Button = ({
  label,
  onClick,
  textColor,
  bgColor,
  fullWidth,
  disabled,
}: {
  label: any;
  onClick?: () => void;
  textColor?: string;
  bgColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-full
          font-semibold
          hover:opacity-80
          transition
          border-2
          px-4
          py-2
          ${textColor ? textColor : "text-black"}
          ${bgColor ? bgColor : "bg-white"}
          ${fullWidth ? "w-full" : "w-fit"}
        `}
    >
      {label}
    </button>
  );
};

export default Button;
