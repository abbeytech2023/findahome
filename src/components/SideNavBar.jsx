import { CgMenuGridO } from "react-icons/cg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTabDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  font-size: 0.8rem;
  height: 100%;
  z-index: 10;
  color: #0d293b;
  color: #fff;
  background-color: #555;

  /* transform: translateY(-100%); */
  transition: all 0.3s ease-out;
`;

export default function SideNavBar() {
  const [isOpen, setIsisOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const { user } = useAuthContext();
  return (
    <div className="relative flex gap-2 bg-gray-400">
      <div className="z-10 text-4xl absolute ">
        <div
          onClick={() => setIsisOpen(true)}
          className={`bg-[#0d293b] flex gap-4  items-center text-white  py-2 px-1 absolute top-16 left-0   xl:hidden lg:hidden`}
        >
          {/* {!isOpen && <h2 className="text-4xl">open</h2>} */}
          {!isOpen && <CgMenuGridO />}
        </div>
      </div>
      <StyledTabDiv
        className={`${
          !isOpen
            ? "translate-x-[-100%] transition-all duration-[3s] ease-in pointer-events-none"
            : "translate-x-0"
        }`}
      >
        <div>
          {isOpen && (
            <IoCloseSharp
              className="text-white text-4xl  absolute top-16 left-[161px]  xl:top-[7rem] lg:top-[6rem]  xl:left-[161px] lg:left-[161px]"
              onClick={() => setIsisOpen(false)}
            />
          )}
        </div>
        {isOpen && <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />}
      </StyledTabDiv>
    </div>
  );
}

function Tabbed() {
  return (
    <div className="flex  flex-col gap-11 h-full min-w-[200px] font-semibold cursor-pointer justify-center  ">
      <Link to="profile">My Profile</Link>
      <Link to="addpropertyforsale">Add property for sale</Link>
      <Link to="addpropertytolet">Add property to let</Link>
      <Link to="myproperties">My properties</Link>
    </div>
  );
}
