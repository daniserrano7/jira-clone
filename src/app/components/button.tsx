import cx from "classix";

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cx(
        "rounded bg-background-brand p-2 text-font-inverse hover:bg-background-brand-hovered active:bg-background-brand-pressed",
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
}
