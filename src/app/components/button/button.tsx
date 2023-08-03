import { forwardRef } from "react";
import cx from "classix";

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "md",
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cx(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 disabled:cursor-not-allowed disabled:opacity-60",
          color === "primary" &&
            "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed",
          color === "neutral" &&
            "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed",
          color === "danger" &&
            "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed",
          variant === "text" && "bg-transparent",
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "danger";
  variant?: "contained" | "text";
  size?: "md" | "lg";
}
