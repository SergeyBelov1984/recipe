import { Outlet } from "react-router-dom";
import "./Rootlayout.css";

const RootLayout = () => {
  return (
    <div className="mainPage">
      <p className="header">Кулинарные рецепты</p>
      <Outlet />
    </div>
  );
};
export default RootLayout;
