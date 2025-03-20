// import Form from "../components";
// import { doc, updateDoc } from "firebase/firestore";

import { fetchCollectionForAUser } from "../hooks/useCollections";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { useState } from "react";
import StyledInput from "./StyledInput";

const StyledProfileBox = styled.div`
  display: flex;

  margin-bottom: 12px;
  & > :first-child {
    width: 7rem;
  }
`;

// Email regex: /\S+@\S+\.\S+/

function Profile() {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [nin, setNin] = useState();
  const [State, setEState] = useState();

  const { data: user, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchCollectionForAUser,
  });
  // const { aDoc } = useCollections("Users");

  // const { updateDocument } = useFirestore("Users");

  // const docRef = doc(db, "Users", auth.currentUser.uid);

  const GreyBox = styled.div`
    filter: grayscale();
    opacity: 0.8;
  `;

  // const handleSaveDocument = (e) => {
  //   e.preventDefault();
  //   console.log(gender);

  //   updateDocument({ displayName, email, NIN, gender, State, localGovt });
  // };

  return (
    <>
      <div className="flex items-center flex-col  mb-[5rem]">
        {!user ? (
          <Spinner />
        ) : (
          <form className="flex flex-col gap-[1.8rem]">
            <StyledProfileBox>
              <Label>
                <p>FullName</p>
              </Label>
              <StyledInput value={user && user.displayName} />
            </StyledProfileBox>
            <StyledProfileBox>
              <Label editSavebutton>
                <p>Email</p>
              </Label>
              <StyledInput value={user && user.email} />
            </StyledProfileBox>
            <StyledProfileBox>
              <Label>
                <p>NIN</p>
              </Label>
              <StyledInput value={user && user.nin} />
            </StyledProfileBox>
            <StyledProfileBox>
              <Label>
                <p>State</p>
              </Label>
              <StyledInput value={user && user.state} />
            </StyledProfileBox>
            <StyledProfileBox>
              <Label label="Local-govt"> Local-government</Label>
              <StyledInput value={user && user.localGovt} />
            </StyledProfileBox>
            <StyledProfileBox>
              <Label>
                <p>Gender</p>
              </Label>
              <p className="uppercase">{user && user.gender}</p>
            </StyledProfileBox>
            <EditSaaveButton />
          </form>
        )}
      </div>
    </>
  );
}

export default Profile;

function Label({ children }) {
  return (
    <div className=" text-[0.9rem]  mr-[5rem] flex flex-row ">{children}</div>
  );
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
