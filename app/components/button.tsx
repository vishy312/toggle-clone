import React from "react";

interface ButtonProp {
  type?: string;
  textColor: string;
  bgColor: string;
  bgColorHover: string;
  children: string;
}

const Button = ({
  textColor,
  bgColor,
  bgColorHover,
  type,
  children,
}: ButtonProp) => {
  return (
    <button
      className={`${textColor} ${bgColor} transition-all ${bgColorHover} duration-200 cursor-pointer text-sm py-4 px-7 font-semibold rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
