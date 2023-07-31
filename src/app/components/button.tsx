import cx from "classix";

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={cx(
        "flex cursor-pointer items-center justify-center rounded p-2 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed",
        variant === "neutral" &&
          "bg-background-accent-grey-subtlest hover:bg-background-accent-grey-subtler active:bg-background-accent-grey-subtle",
        variant === "danger" &&
          "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "neutral" | "danger";
}
