export const Error500 = ({ message, href }: Props) => {
  return (
    <div className="h-full w-full text-center">
      <img
        src="/images/error-500.png"
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
  message: string;
  href: string;
}
