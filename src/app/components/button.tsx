import cx from "classix";

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cx(
        "text-white hover:bg-primary-main-hover rounded bg-background-brand p-2",
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
