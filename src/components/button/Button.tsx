import classNames from "classnames";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean; //for button disabled
}

export const Button = ({
  color,
  children,
  className,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn",
        {
          "btn-primary": color === "primary",
          "btn-secondary": color === "secondary",
          "btn-danger": color === "danger",
        },
        className
      )}
      onClick={onClick}
      disabled={disabled} //property, aminek disabled a value-ja, ami meg false.
    >
      {children}
    </button>
  );
};
