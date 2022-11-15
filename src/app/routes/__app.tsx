import { Outlet } from "@remix-run/react";
import { Header } from "@app/views/app/header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
