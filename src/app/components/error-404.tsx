import { useEffect } from "react";
import { toast } from "react-toastify";
import { ErrorBase } from "./error-base";

export const Error404 = ({ message, href }: Props) => {
  useEffect(() => {
    toast.warning("Try to go back to the previous page.");
  }, []);

  return <ErrorBase variant="404" message={message} href={href} />;
};

interface Props {
  message: string;
  href: string;
}
