// components/Loader.tsx
import React from "react";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
  center?: boolean;
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  text = "در حال بارگذاری...",
  center = true,
}) => {
  const sizeClass = sizeMap[size];

  return (
    <div
      className={center ? "flex flex-col items-center justify-center py-4" : ""}
    >
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent border-[#7b6e5d] ${sizeClass}`}
      />
      {text && <p className="mt-2 text-sm text-black">{text}</p>}
    </div>
  );
};
