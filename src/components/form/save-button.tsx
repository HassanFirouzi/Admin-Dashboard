"use client";

import { isDemoReadOnly, DEMO_READONLY_MESSAGE } from "@/utils/demo";
import { FC } from "react";
import { toast } from "react-toastify";

const SaveButton: FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDemoReadOnly) return;
    e.preventDefault();
    toast.info(DEMO_READONLY_MESSAGE);
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition"
    >
      Kaydet
    </button>
  );
};

export default SaveButton;
