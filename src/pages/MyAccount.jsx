import { Link, Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";
import SideBarTabbed from "../components/SideBarTabbed";

export default function MyAccount() {
  return (
    <div className=" ">
      <div>
        <div className="absolute top-1 lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col text-[#fff] bg-[#144c6f] h-screen fixed z-10 top-0 bottom-0 sm:hidden md:hidden lg:block xl:block min-[0px]:hidden ">
            <SideBarTabbed />
          </div>
          <div className=" w-4/5 flex pl-[5%] justify-center items-center ml-16 mt-36">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
