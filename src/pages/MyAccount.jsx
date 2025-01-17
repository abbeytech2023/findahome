import Profile from "../components/Profile";
import CreatePropertiesToLetForm from "../components/CreatePropertiesToLetForm";
import { useState } from "react";
import PropertiesToLet from "../components/PropertiesToLet";
import ProductCart from "../components/ProductCart";
import { useUserCollection } from "../hooks/useUserCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductSaleForm from "../components/ProductSaleForm";
import { GiClosedDoors, GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function MyAccount() {
  const [isOpen, setIsisOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const { user } = useAuthContext();
  const { documents, error } = useUserCollection(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div className="h-screen  relative flex gap-2">
      <div className="z-10 text-4xl absolute ">
        {!isOpen && (
          <GiHamburgerMenu
            className="absolute top-[4.5rem] left-0.5"
            onClick={() => setIsisOpen(true)}
          />
        )}
        {isOpen && (
          <IoCloseSharp
            className="text-white absolute top-[4.5rem] left-[9.75rem]"
            onClick={() => setIsisOpen(false)}
          />
        )}
      </div>
      <div className="fixed left-0 bottom-0 top-0 bg-[#0d293b] ">
        {isOpen && <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />}
      </div>
      <div className="flex justify-center items-center w-full h-auto">
        {activeTab === 1 ? <Profile /> : null}
        {activeTab === 2 ? <ProductSaleForm /> : null}
        {activeTab === 3 ? <CreatePropertiesToLetForm /> : null}
        {activeTab === 4 ? <PropertiesToLet /> : null}
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
