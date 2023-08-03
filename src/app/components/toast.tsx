import { ToastContainer } from "react-toastify";
import { useTheme } from "@app/store/theme.store";

export const Toast = () => {
  const { theme } = useTheme();
  const toastTheme = theme === "light" ? "light" : "dark";

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toastTheme}
    />
  );
};
