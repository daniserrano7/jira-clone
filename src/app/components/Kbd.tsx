export const Kbd = ({ children }: Props): JSX.Element => {
  return (
    <kbd
      accessKey=""
      className="rounded bg-grey-300  p-1 font-primary-light text-icon dark:bg-dark-500 dark:text-font-light-dark"
    >
      {children}
    </kbd>
  );
};

interface Props {
  children: string;
}
