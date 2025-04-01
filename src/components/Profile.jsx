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
import Input from "./Input";

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// Email regex: /\S+@\S+\.\S+/

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 2rem; */

  & label {
    width: 9rem;
    margin-bottom: 0.4rem;
  }

  & input {
    border: 1px solid black;
    max-width: 15rem;
    height: 4rem;
    /* filter: grayscale(); */
    /* opacity: 0.6; */
  }
`;

const StyledContainerEditSave = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin-left: auto; */
`;

function Profile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchCollectionForAUser,
  });

  return (
    <>
      <div className="flex items-center flex-col text-lg mb-[10rem] ">
        {!user ? <Spinner /> : <UserDetails user={user} />}
      </div>
    </>
  );
}

const UserDetails = ({ user }) => {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [NIN, setNin] = useState();
  const [gender, setgender] = useState();
  const [State, setState] = useState();
  const [localGovt, setLocalGovt] = useState();
  const [homeAdress, setHomeAdress] = useState();
  const [officeAdress, setOfficeAdress] = useState();

  const inputRefState = useRef(null);
  const inputRefLocalGovt = useRef(null);
  const inputRefNIN = useRef(null);
  const inputRefOfficeAddress = useRef(null);
  const inputRefHomeAddress = useRef(null);
  const inputRefGener = useRef(null);

  useEffect(() => {
    const getUserDetails = () => {
      setDisplayName(user && user.displayName);
      setState(user && user.State);
      setEmail(user && user.email);
      setNin(user && user.NIN);
      setgender(user && user.gender);
      setLocalGovt(user && user.localGovt);
      setHomeAdress(user && user.homeAdress);
      setOfficeAdress(user && user.officeAdress);
    };
    getUserDetails();
  }, [user]);

  const { mutate } = useMutation({
    mutationFn: (data) => upDateDocument(data),
    onSuccess: () => toast.success("updated successfully"),
  });

  const { reset, register, handleSubmit, formState } = useForm();

  const [disable, setDisable] = useState(true);

  // const onsubmit = ({ data }) => {
  //   // mutate({ data });
  //   console.log(data);
  // };

  let onsubmit;

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-9">
      <StyledFormDiv>
        <div className=" flex flex-col">
          <label>full-name</label>
          <input
            disabled
            value={displayName}
            className={`${disable === true ? "opacity-50" : "opacity-100"}`}
          />
        </div>
      </StyledFormDiv>
      <StyledFormDiv>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            disabled
            value={email}
            className={`${disable === true ? "opacity-50" : "opacity-100"}`}
          />
        </div>
      </StyledFormDiv>
      <StyledFormDiv className="">
        <div className="flex flex-col">
          <label>state</label>
          <input disabled={disable} ref={inputRefState} value={State} />
        </div>
        <StyledContainerEditSave>
          {
            <EditSaaveButton
              onClick={(e) => {
                e.preventDefault();
                inputRefState.current.focus();
                inputRefState.current.disabled = false;
              }}
            >
              edit
            </EditSaaveButton>
          }
          {
            <EditSaaveButton
              onClick={(e) => {
                e.preventDefault();
                inputRefState.current.disabled = true;
                mutate({ State });
              }}
            >
              save
            </EditSaaveButton>
          }
        </StyledContainerEditSave>
      </StyledFormDiv>

      <StyledFormDiv>
        <div className="flex flex-col">
          <label>Local-Govt</label>
          <input
            disabled={disable}
            ref={inputRefLocalGovt}
            onChange={(e) => setLocalGovt(e.target.value)}
            value={localGovt}
          />
        </div>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefLocalGovt.current.focus();
              inputRefLocalGovt.current.disabled = false;
            }}
          >
            edit
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefLocalGovt.current.disabled = true;
              mutate({ localGovt });
            }}
          >
            save
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <div className="flex flex-col">
          <label>NIN</label>
          <input
            disabled={disable}
            ref={inputRefNIN}
            onChange={(e) => setNin(e.target.value)}
            value={NIN}
          />
        </div>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefNIN.current.focus();
              inputRefNIN.current.disabled = false;
            }}
          >
            edit
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              mutate({ NIN });
            }}
          >
            save
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <div className="flex flex-col">
          <label>gender</label>
          <input
            disabled={disable}
            ref={inputRefGener}
            onChange={(e) => setgender(e.target.value)}
            className={` ${disable === true ? "opacity-50" : "opacity-100"}`}
            value={gender}
          />
        </div>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefGener.current.focus();
              inputRefGener.current.disabled = false;
              inputRefGener.current.opacity = "1";
            }}
          >
            edit
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefGener.current.disabled = true;
              inputRefGener.current.disabled = false;

              mutate({ gender });
            }}
          >
            Save
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>

      <StyledFormDiv>
        <div className="flex flex-col">
          <label className="">Home-Address</label>
          <input
            disabled={disable}
            ref={inputRefHomeAddress}
            onChange={(e) => setHomeAdress(e.target.value)}
            value={homeAdress}
          />
        </div>
        <StyledContainerEditSave>
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
              inputRefHomeAddress.current.disable = true;
              mutate({ homeAdress });
            }}
          >
            Save
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <div className="flex flex-col">
          <label>Office-Address</label>
          <input
            disabled={disable}
            ref={inputRefOfficeAddress}
            value={officeAdress}
            onChange={(e) => setOfficeAdress(e.target.value)}
          />
        </div>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefOfficeAddress.current.focus();
              inputRefOfficeAddress.current.disabled = false;
            }}
          >
            edit
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefOfficeAddress.current.focus();
              inputRefOfficeAddress.current.disabled = true;
              mutate({ officeAdress });
            }}
          >
            save
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      {/* <StyledFormDiv></StyledFormDiv> */}
    </form>
  );
};

export default Profile;

function EditSaaveButton({ onClick, label, children }) {
  return (
    <div className=" gap-4">
      <button
        onClick={onClick}
        className="border-[1px] text-[#fff] text  bg-[#39637d] rounded-lg py-1 px-1"
      >
        {children}
      </button>
    </div>
  );
}
