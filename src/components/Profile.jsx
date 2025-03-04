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

const StyledProfileBox = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 12px;
  & > :first-child {
    width: 8rem;
  }
`;

// Email regex: /\S+@\S+\.\S+/

function Profile() {
  const { aDoc } = useCollections("Users");
  const [displayName, setDisplayName] = useState(null);
  const [NIN, setNIN] = useState(null);
  const [gender, setGender] = useState(null);
  const [State, setState] = useState(null);
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

    updateDocument({ displayName, email, NIN, gender, State, localGovt });
  };

  return (
    <>
      <div className="flex items-center flex-col  mb-[5rem] gap-8">
        <form onSubmit={handleSaveDocument}>
          <StyledProfileBox>
            <Label>
              <p>FullName</p>
            </Label>
            <p className="uppercase">{displayName}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label editSavebutton>
              <p>Email</p>
            </Label>
            {email}
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>NIN</p>
            </Label>
            <p>{NIN}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>State</p>
            </Label>
            <p className="uppercase">{State}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label label="Local-govt"> Local-government</Label>
            <p className="uppercase">{localGovt}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>Gender</p>
            </Label>
            <p className="uppercase">{gender}</p>
          </StyledProfileBox>
          <EditSaaveButton />
        </form>
      </div>
    </>
  );
}

export default Profile;

function Label({ children }) {
  return <div className=" text-[0.9rem] flex flex-row ">{children}</div>;
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
