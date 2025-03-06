// import Form from "../components";
// import { doc, updateDoc } from "firebase/firestore";

import { fetchCollectionForAUser } from "../hooks/useCollections";
import { useFirestore } from "../hooks/useFirestore";
import { useCollections } from "../hooks/useCollections";
import styled from "styled-components";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";

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
      <div className="flex items-center flex-col  mb-[5rem] gap-8">
        <form>
          <StyledProfileBox>
            <Label>
              <p>FullName</p>
            </Label>
            <p className="uppercase">{user && user.displayName}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label editSavebutton>
              <p>Email</p>
            </Label>
            <p> {user && user.email}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>NIN</p>
            </Label>
            <p>{user && user.NIN}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>State</p>
            </Label>
            <p className="uppercase">{user && user.state}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label label="Local-govt"> Local-government</Label>
            <p className="uppercase">{user && user.localGovt}</p>
          </StyledProfileBox>
          <StyledProfileBox>
            <Label>
              <p>Gender</p>
            </Label>
            <p className="uppercase">{user && user.gender}</p>
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
