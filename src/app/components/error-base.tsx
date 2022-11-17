export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="text-center max-w-[500px]">
      <img
        src={imgPath}
        alt="Server error"
        className="h-[350px] w-auto mx-auto mb-4"
      />
      <a
        href={href}
        className="text-primary-main max-w-[100px] text-lg hover:underline"
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
