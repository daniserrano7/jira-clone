import { ErrorBase } from "./error-base";

export const Error404 = ({ message, href }: Props) => {
  return <ErrorBase variant="404" message={message} href={href} />;
};

interface Props {
  message: string;
  href: string;
}
