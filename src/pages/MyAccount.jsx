import { Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";
import SideBarTabbed from "../components/SideBarTabbed";

export default function MyAccount() {
  return (
    <div className="mt-32 items-center">
      <div>
        <div className="fixed top-16 lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex w-7rem justify-start ml-[10%] gap-[30%]">
          <div className="text-[#fff]  sm:hidden md:hidden lg:block xl:block min-[0px]:hidden ">
            <SideBarTabbed />
          </div>
          <div className="mt-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
