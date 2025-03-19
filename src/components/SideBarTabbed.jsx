import { Link } from "react-router-dom";

function SideBarTabbed() {
  return (
    <div className="flex  flex-col gap-11 h-full min-w-[200px] font-semibold cursor-pointer justify-center  ">
      <Link to="profile">My Profile</Link>
      <Link to="addpropertyforsale">Add property for sale</Link>
      <Link to="addpropertytolet">Add property to let</Link>
      <Link to="myproperties">My properties</Link>
    </div>
  );
}

export default SideBarTabbed;
