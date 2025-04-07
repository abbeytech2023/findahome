import { Link } from "react-router-dom";
import { StyledNavLink } from "./Navigation";

function SideBarTabbed() {
  return (
    <div className="flex absolute border-2 py-10 border-[rgba(20,76,111)] bg-[rgba(20,76,111,0.8)]  flex-col gap-11  min-w-[200px] font-semibold cursor-pointer justify-center items-center  ">
      <StyledNavLink to="profile">Edit Profile</StyledNavLink>
      <StyledNavLink to="addpropertyforsale">
        Add property for sale
      </StyledNavLink>
      <StyledNavLink to="addpropertytolet">Add property to let</StyledNavLink>
      <StyledNavLink to="myproperties">My properties</StyledNavLink>
    </div>
  );
}

export default SideBarTabbed;
