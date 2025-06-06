"use client";

import { FC } from "react";
import { CheckCircle } from "lucide-react";

interface ButtonMarkDoneProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonMarkDone: FC<ButtonMarkDoneProps> = ({
  label = "Mark as Done",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 rounded-md px-4 py-2 font-medium text-white transition-colors ${
        disabled
          ? "cursor-not-allowed bg-neutral-400"
          : "bg-success hover:bg-success-dark focus:ring-2 focus:ring-success-light focus:ring-opacity-50 focus:outline-none"
      }`}
    >
      <CheckCircle className="h-5 w-5" />
      {label}
    </button>
  );
};

export default ButtonMarkDone;
