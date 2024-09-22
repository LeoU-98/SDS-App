import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
