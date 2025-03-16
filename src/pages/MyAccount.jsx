import { Outlet } from "react-router-dom";
import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";

export default function MyAccount() {
  return (
    <div className="mt-24">
      <SideNavBar />

      <Outlet />
    </div>
  );
}
