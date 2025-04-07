import { Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";
import SideBarTabbed from "../components/SideBarTabbed";

export default function MyAccount() {
  return (
    <div className="">
      <div>
        <div className="mt-[4.3rem]  lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex  items-start justify-start ml-[10%] gap-[15%]">
          <div className="flex flex-col text-[#144c6f]  sm:hidden md:hidden lg:block xl:block min-[0px]:hidden ">
            <SideBarTabbed />
          </div>
          <div className="flex justify-center items-center  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
