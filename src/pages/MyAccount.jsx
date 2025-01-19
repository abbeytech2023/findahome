import Profile from "../components/Profile";
import CreatePropertiesToLetForm from "../components/CreatePropertiesToLetForm";
import { useState } from "react";
import PropertiesToLet from "../components/PropertiesToLet";
import { useUserCollection } from "../hooks/useUserCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductSaleForm from "../components/ProductSaleForm";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import ProductCart from "../components/ProductCart";

const StyledTabDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 10;
  background-color: #0d293b;
  /* transform: translateY(-100%); */
  transition: all 0.3s ease-out;
`;

export default function MyAccount() {
  const [isOpen, setIsisOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const { user } = useAuthContext();
  const { documents, error } = useUserCollection(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div className="h-screen   relative flex gap-2">
      <div className="z-10 text-4xl absolute ">
        <div
          onClick={() => setIsisOpen(true)}
          className={`bg-[#0d293b] flex gap-4 items-center text-white  py-2 px-1 absolute top-[4.2rem] left-0.3`}
        >
          {/* {!isOpen && <h2 className="text-4xl">open</h2>} */}
          {!isOpen && <GiHamburgerMenu />}
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
              className="text-white text-4xl  absolute top-[4.5rem] left-[9.75rem]"
              onClick={() => setIsisOpen(false)}
            />
          )}
        </div>
        {isOpen && <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />}
      </StyledTabDiv>
      <div className="w-full flex justify-center items-center h-auto">
        {activeTab === 1 ? <Profile /> : null}
        {activeTab === 2 ? <ProductSaleForm uid={user && user.uid} /> : null}
        {activeTab === 3 ? <CreatePropertiesToLetForm /> : null}
        {activeTab === 4 ? (
          <ProductCart documents={documents} error={error} />
        ) : null}
      </div>
    </div>
  );
}

function Tabbed({ activeTab, setActiveTab }) {
  return (
    <div className="flex  flex-col h-full min-w-[200px] font-semibold cursor-pointer  text-[#fff] justify-center gap-8 ">
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
          ? `${otherClass} bg-[#04090c] `
          : `${otherClass} hover:bg-[#04090c] text-left  `
      }
    >
      {children}
    </button>
  );
}
