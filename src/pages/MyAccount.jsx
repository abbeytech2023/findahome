import Profile from "../components/Profile";
import CreatePropertiesToLetForm from "../components/CreatePropertiesToLetForm";
import { useState } from "react";
import { useUserCollections } from "../hooks/useUserCollections";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductSaleForm from "../components/ProductSaleForm";
import { CgMenuGridO } from "react-icons/cg";

import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import ProductCart from "../components/ProductCart";

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

export default function MyAccount() {
  const [isOpen, setIsisOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const { user } = useAuthContext();
  const { documents, error } = useUserCollections(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );
  return (
    <>
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
          {isOpen && (
            <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </StyledTabDiv>

        <div className=" flex items-start justify-start pl-10 sm:pl-5 pt-[8rem] gap-9 w-full ">
          <div className="sm:hidden md:hidden min-[0px]:hidden lg:block xl:block">
            <div className="flex border-1 border-solid bg-white border-black   flex-col">
              <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab}>
                my profile
              </Tab>
              <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab}>
                Add property for sale
              </Tab>
              <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab}>
                Add property to let
              </Tab>
              <Tab num={4} activeTab={activeTab} setActiveTab={setActiveTab}>
                my properties
              </Tab>
            </div>
          </div>
          <div
            className={`flex justify-start pl-[5%] pt-7 w-[100%] bg-white pr-[2%]  mr-[5%]`}
          >
            {activeTab === 1 ? <Profile /> : null}
            {activeTab === 2 ? (
              <ProductSaleForm uid={user && user.uid} />
            ) : null}
            {activeTab === 3 ? <CreatePropertiesToLetForm /> : null}
            {activeTab === 4 ? (
              <>
                <ProductCart documents={documents} error={error} />
                {/* <PropertiesToLet /> */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

function Tabbed({ activeTab, setActiveTab }) {
  return (
    <div className="flex  flex-col gap-11 h-full min-w-[200px] font-semibold cursor-pointer justify-center  ">
      <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab}>
        My Profile
      </Tab>
      <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab}>
        Add property for sale
      </Tab>
      <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab}>
        Add property to let
      </Tab>
      <Tab num={4} activeTab={activeTab} setActiveTab={setActiveTab}>
        My properties
      </Tab>
    </div>
  );
}

function Tab({ children, activeTab, num, setActiveTab }) {
  const otherClass = "py-2 px-1";
  return (
    <button
      onClick={() => {
        setActiveTab(num);
      }}
      className={
        activeTab === num
          ? `${otherClass} bg-[#0d293b] text-white `
          : `${otherClass} hover:bg-[rgba(13,41,59,0.56)]  hover:text-white `
      }
    >
      {children}
    </button>
  );
}
