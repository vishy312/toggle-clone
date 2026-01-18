import React from "react";

interface ButtonProp {
  type?: "primary" | "secondary" | "ghost";
  textColor: string;
  bgColor: string;
  bgColorHover: string;
  children: string;
}

const Button = ({
  textColor,
  bgColor,
  bgColorHover,
  type = "primary",
  children,
}: ButtonProp) => {
  return (
    <button
      type="button"
      className={`${textColor} ${bgColor} transition-all ${bgColorHover} duration-200 cursor-pointer text-sm py-4 px-7 font-semibold rounded-full inline-flex items-center gap-4`}
    >
      {type === "secondary" && <LeftIconCircle />}
      {children}
      {type === "ghost" && <LeftIcon />}
    </button>
  );
};

export default Button;

export const LeftIconCircle = () => {
  return (
    <svg width={25} viewBox="0 0 165 164">
      <path
        d="M82.5 163.299c45.563 0 82.5-36.555 82.5-81.65C165 36.557 128.063 0 82.5 0S0 36.556 0 81.65c0 45.094 36.937 81.649 82.5 81.649z"
        fill="#FEFBFA"
      ></path>
      <path
        d="M67.106 110.983l46.458-28.391L67.106 54.2v56.782z"
        fill="#2C1338"
      ></path>
    </svg>
  );
};
export const LeftIcon = () => {
  return (
    <svg width={25} viewBox="0 0 165 164">
      <path
        d="M67.106 110.983l46.458-28.391L67.106 54.2v56.782z"
        fill="#2C1338"
      ></path>
    </svg>
  );
};
