import { Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";
import SideBarTabbed from "../components/SideBarTabbed";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../hooks/useAuthContext";

export default function MyAccount() {
  const { user } = useAuthContext();
  return (
    <div className="mt-32 items-center">
      <div>
        <div className="z-[8] fixed top-16 lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex w-7rem justify-start ml-[10%] gap-[30%]">
          <div className="text-[#fff]  sm:hidden md:hidden lg:block xl:block min-[0px]:hidden ">
            <SideBarTabbed />
          </div>
          <div className="mt-12 bg-red-800">
            {user ? (
              <div className="bg-gray-800 flex items-start">
                <Spinner />
              </div>
            ) : (
              <div>
                <Outlet />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
