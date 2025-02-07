// import Form from "../components";
// import { db, auth } from "../firebase/config";
// import { doc, updateDoc } from "firebase/firestore";

import StyledInput from "../components/StyledInput";
import { Heading } from "./HeadingText";
import { useFirestore } from "../hooks/useFirestore";
import { useCollections } from "../hooks/useCollections";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { addDoc } from "firebase/firestore";

// Email regex: /\S+@\S+\.\S+/

function Profile() {
  const { aDoc } = useCollections("Users");
  const [displayName, setDisplayName] = useState(null);
  const [NIN, setNIN] = useState(null);
  const [gender, setGender] = useState(null);
  const [state, setState] = useState(null);
  const [localGovt, setLocalGovt] = useState(null);
  const [email, setEmail] = useState(null);
  const { updateDocument } = useFirestore("Users");

  // const docRef = doc(db, "Users", auth.currentUser.uid);

  const GreyBox = styled.div`
    filter: grayscale();
    opacity: 0.8;
  `;

  useEffect(() => {
    async function set() {
      setDisplayName(() => aDoc && aDoc.displayName);
      setGender(aDoc && aDoc.gender);
      setState(aDoc && aDoc.state);
      setLocalGovt(aDoc && aDoc.localGovt);
      setEmail(aDoc && aDoc.email);
      setNIN(aDoc && aDoc.NIN);
    }
    set();
  }, [aDoc]);

  const handleSaveDocument = (e) => {
    e.preventDefault();
    console.log(gender);

    updateDocument({ displayName, email, NIN, gender, state, localGovt });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col mt-44 mb-[5rem] gap-8">
        <form onSubmit={handleSaveDocument}>
          <GreyBox>
            <ProfileFormRow label="Fullname">
              <StyledInput
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                name="displayName"
                type="text"
                id="displayName"
                disabled
              />
            </ProfileFormRow>
          </GreyBox>
          <GreyBox>
            <ProfileFormRow label="email" editSavebutton>
              <StyledInput
                value={email}
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </ProfileFormRow>
          </GreyBox>

          <ProfileFormRow label="Nin">
            <StyledInput
              value={NIN}
              type="text"
              id="NIN"
              onChange={(e) => setNIN(e.target.value)}
            />
          </ProfileFormRow>
          <ProfileFormRow label="State">
            <StyledInput
              value={aDoc && aDoc.state}
              type="text"
              id="gender"
              onChange={(e) => setState(e.target.value)}
            />
          </ProfileFormRow>
          <ProfileFormRow label="Local-govt">
            <StyledInput
              value={localGovt}
              type="text"
              id="localGovt"
              onChange={(e) => setLocalGovt(e.target.value)}
            />
          </ProfileFormRow>
          {/* <ProfileFormRow label="user ID">
            <StyledInput
              value={(aDoc && aDoc.id) || ""}
              type="text"
              id="ID"
              disabled
              // onChange={(e) => setLocalGovt(e.target.value)}
            />
          </ProfileFormRow> */}
          <ProfileFormRow label="Gender">
            <div>
              <select
                className="py-2 w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </ProfileFormRow>
          <EditSaaveButton />
        </form>
      </div>
    </>
  );
}

export default Profile;

function ProfileFormRow({ children, label }) {
  return (
    <div className="flex flex-col gap-4 mb-4  ">
      {label && <Label htmlFor={children.props?.id}>{label}</Label>}
      {children}
    </div>
  );
}

function Label({ children }) {
  return <div className=" text-[0.9rem]">{children}</div>;
}

function EditSaaveButton({ onClick }) {
  return (
    <div className="flex justify-center items-center gap-4 mb-2">
      <button
        onClick={onClick}
        className="border-2 bg-[#144c6f] mt-7 border-white text-white rounded-lg px-8 py-2"
      >
        save
      </button>
    </div>
  );
}
