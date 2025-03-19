import { Link } from "react-router-dom";
import { StyledNavLink } from "./Navigation";

function SideBarTabbed() {
  return (
    <div className="flex  flex-col gap-11 h-full min-w-[200px] font-semibold cursor-pointer justify-center items-center  ">
      <StyledNavLink to="profile">My Profile</StyledNavLink>
      <StyledNavLink to="addpropertyforsale">
        Add property for sale
      </StyledNavLink>
      <StyledNavLink to="addpropertytolet">Add property to let</StyledNavLink>
      <StyledNavLink to="myproperties">My properties</StyledNavLink>
    </div>
  );
}

export default SideBarTabbed;
