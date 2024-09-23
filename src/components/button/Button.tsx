import classNames from "classnames";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  color,
  children,
  className,
  onClick,
  disabled = false //set it to false as default, change value, if condition applies to that particular btn.
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
      disabled={disabled} //here value is set to default, which is false.
    >
      {children}
    </button>
  );
};
