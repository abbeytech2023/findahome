import { CgMenuGridO } from "react-icons/cg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBarTabbed from "./SideBarTabbed";

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
  background-color: #144c6f;

  /* transform: translateY(-100%); */
  transition: all 0.3s ease-out;
`;

export default function SideNavBar() {
  const [isOpen, setIsisOpen] = useState(false);
  const { user } = useAuthContext();
  return (
    <div className="relative flex gap-2 ">
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
        {isOpen && <SideBarTabbed />}
      </StyledTabDiv>
    </div>
  );
}
