import Profile from "../components/Profile";
import CreatePropertiesToLetForm from "../components/CreatePropertiesToLetForm";
import { useState } from "react";
import PropertiesToLet from "../components/PropertiesToLet";
import ProductCart from "../components/ProductCart";
import { useUserCollection } from "../hooks/useUserCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState(null);
  const { user } = useAuthContext();
  const { documents, error } = useUserCollection(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div className="h-screen flex gap-2">
      <div className="h-screen bg-[#0d293b]">
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
      </div>
      <div className=" w-full flex items-center justify-center">
        {activeTab === 1 ? <Profile /> : null}
        {activeTab === 2 ? <CreatePropertiesToLetForm /> : null}
        {activeTab === 3 ? <PropertiesToLet /> : null}
        {activeTab === 4 ? (
          <ProductCart
            uid={user && user.uid}
            documents={documents}
            error={error}
          />
        ) : null}
      </div>
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
