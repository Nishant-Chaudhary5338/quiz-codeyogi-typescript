/** @format */

import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";

type ButtonProps = {
  theme: "primary" | "secondary" | "admin" | "white";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ type, theme, ...rest }) => {
  const themeClasses = cn("px-4 py-2 border rounded-md", {
    "bg-purple-900 text-white border-indigo-700": theme === "primary",
    "bg-green-500 text-white border-green-600": theme === "secondary",
    "bg-yellow-300  border-yellow-500": theme === "admin",
    "bg-gray-50  border-black": theme === "white",
  });
  return (
    <>
      <button className={themeClasses} {...rest}></button>
    </>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default memo(Button);
