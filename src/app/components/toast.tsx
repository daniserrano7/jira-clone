import { ToastContainer } from 'react-toastify';
import { useTheme, Theme } from '@app/store/theme.store';

export const Toast = () => {
  const { theme } = useTheme();
  const toastTheme: Theme = theme || Theme.LIGHT;

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
}