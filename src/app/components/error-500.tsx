import { useEffect } from "react";
import { toast } from "react-toastify";
import { ErrorBase } from "./error-base";

export const Error500 = ({ message, href }: Props) => {
  useEffect(() => {
    toast.error("Try reloading the page.");
  }, []);

  return <ErrorBase variant="500" message={message} href={href} />;
};

interface Props {
  message: string;
  href: string;
}
