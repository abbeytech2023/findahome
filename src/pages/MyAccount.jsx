import { Link, Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";

export default function MyAccount() {
  return (
    <div className="mt-32  ">
      <div>
        <div className="absolute top-1 lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-7 sm:hidden md:hidden ">
            <Link to="profile">my profile</Link>
            <Link to="addpropertyforsale">Add property for sale</Link>
            <Link to="addpropertytolet">Add property to let</Link>
            <Link to="myproperties">my properties</Link>
          </div>
          <div className=" w-4/5 flex pl-[5%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
