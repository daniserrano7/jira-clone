export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="h-full w-full text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="h-[350px] w-auto mx-auto"
      />
      <a href={href} className="text-primary-main text-lg hover:underline">
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
