import React from "react";

type Variant = "primary" | "accent" | "success" | "alert";

type ButtonProps = { children: React.ReactNode; onClick?: () => void; className?: string ;variant?: Variant; };

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#6F4E37] hover:bg-[#5A3F2C] text-white",
  accent: "bg-[#A9746E] hover:bg-[#91615C] text-white",
  success: "bg-[#8B6F47] hover:bg-[#7A5F3C] text-white",
  alert: "bg-[#A65E3A] hover:bg-[#924E2F] text-white",
};


const Button: React.FC<ButtonProps> = ({ children, onClick, className , variant = "primary",}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 cursor-pointer py-2 ${variantClasses[variant]} font-semibold rounded-4xl shadow-md ${className} duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
