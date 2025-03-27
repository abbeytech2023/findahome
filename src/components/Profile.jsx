// import Form from "../components";
// import { doc, updateDoc } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { fetchCollectionForAUser } from "../hooks/useCollections";
import { upDateDocument } from "../hooks/useFirestore";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import ProfileFormEdit from "./ProfileFormEdit";
import Spinner from "./Spinner";
import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// Email regex: /\S+@\S+\.\S+/

const StyledFormDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & label {
    width: 5rem;
  }

  & input {
    /* border: 1px solid black; */
    max-width: 15rem;
    height: 2rem;
  }
`;

function Profile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchCollectionForAUser,
  });

  return (
    <>
      <div className="flex items-center flex-col  mb-[5rem] ">
        {!user ? <Spinner /> : <UserDetails user={user} />}
      </div>
    </>
  );
}

const UserDetails = ({ user }) => {
  const inputRefState = useRef(null);
  const inputRefLocalGovt = useRef(null);
  const inputRefNIN = useRef(null);
  const inputRefOfficeAddress = useRef(null);
  const inputRefHomeAddress = useRef(null);
  const inputRefGener = useRef(null);

  const { handleSubmit } = useForm;

  const [disable, setDisable] = useState(true);

  return (
    <form className="flex flex-col gap-6">
      <StyledFormDiv>
        <label>full-name</label>
        <input disabled value={user?.displayName} />
      </StyledFormDiv>
      <StyledFormDiv>
        <label>Email</label>
        <input disabled value={user?.email} />
      </StyledFormDiv>
      <StyledFormDiv>
        <label>state</label>
        <input disabled={disable} ref={inputRefState} value={user?.State} />
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefState.current.focus();
            inputRefState.current.disabled = false;
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefState.current.focus();
            inputRefState.current.disabled = false;
          }}
        >
          save
        </EditSaaveButton>
      </StyledFormDiv>

      <StyledFormDiv>
        <label>Local-Govt</label>
        <input ref={inputRefLocalGovt} value={user?.localGovt} />
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefLocalGovt.current.focus();
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefLocalGovt.current.focus();
          }}
        >
          save
        </EditSaaveButton>
      </StyledFormDiv>
      <StyledFormDiv>
        <label>NIN</label>
        <input ref={inputRefNIN} value={user?.NIN} />
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefNIN.current.focus();
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefNIN.current.focus();
          }}
        >
          save
        </EditSaaveButton>
      </StyledFormDiv>
      <StyledFormDiv>
        <label>gender</label>
        <input ref={inputRefGener} value={user?.gender} />

        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefGener.current.focus();
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefGener.current.focus();
          }}
        ></EditSaaveButton>
      </StyledFormDiv>

      <StyledFormDiv>
        <label>Home-Address</label>
        <input ref={inputRefHomeAddress} value={user?.gender} />
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefHomeAddress.current.focus();
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefHomeAddress.current.focus();
          }}
        >
          Save
        </EditSaaveButton>
      </StyledFormDiv>
      <StyledFormDiv>
        <label>Office-Address</label>
        <input ref={inputRefOfficeAddress} value={user?.gender} />
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefOfficeAddress.current.focus();
          }}
        >
          edit
        </EditSaaveButton>
        <EditSaaveButton
          onClick={(e) => {
            e.preventDefault();
            inputRefOfficeAddress.current.focus();
          }}
        >
          save
        </EditSaaveButton>
      </StyledFormDiv>
      <StyledFormDiv></StyledFormDiv>
    </form>
  );
};

export default Profile;

function EditSaaveButton({ onClick, label, children }) {
  return (
    <div className=" gap-4 mb-2">
      <button
        onClick={onClick}
        className="border-2  text-[#144c6f] rounded-lg px-8 py-2"
      >
        {children}
      </button>
    </div>
  );
}
