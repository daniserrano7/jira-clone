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
        "flex items-center justify-center rounded p-2",
        variant === "primary" &&
          "bg-background-brand text-font-inverse hover:bg-background-brand-hovered active:bg-background-brand-pressed",
        variant === "neutral" &&
          "bg-background-accent-grey-subtlest hover:bg-background-accent-grey-subtler active:bg-background-accent-grey-subtle",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "neutral";
}
