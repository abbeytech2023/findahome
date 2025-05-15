import { Outlet } from "react-router-dom";
// import MyProperties from "./MyProperties";
import SideNavBar from "../components/SideNavBar";
import SideBarTabbed from "../components/SideBarTabbed";
import { StyledSpinner } from "../components/Spinner";
import { useAuthContext } from "../hooks/useAuthContext";

export default function MyAccount() {
  const { user } = useAuthContext();
  return (
    <div className="mt-32 items-center">
      <div>
        <div className="z-[8] fixed top-16 lg:hidden xl:hidden">
          <SideNavBar />
        </div>
        <div className="flex  justify-center">
          <div className="text-[#fff] absolute left-6 top-[8rem]  sm:hidden md:hidden lg:block xl:block min-[0px]:hidden ">
            <SideBarTabbed />
          </div>
          <div>
            {!user ? (
              <div className="flex justify-center items-center">
                <StyledSpinner />
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
