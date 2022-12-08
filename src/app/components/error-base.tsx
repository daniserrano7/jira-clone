export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      <a
        href={href}
        className="max-w-[100px] text-lg text-primary-main hover:underline dark:text-primary-main-dark"
      >
        {message}
      </a>
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
