import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { upDateDocument } from "../hooks/useFirestore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import { LuPencilLine } from "react-icons/lu";
import { CiSaveUp2 } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";
import { RiSave2Fill } from "react-icons/ri";

const StyledFormDiv = styled.div`
  display: flex;

  align-items: end;
  position: relative;

  & label {
    width: 9rem;
    margin-bottom: 0.4rem;
  }

  & input {
    border: 1px solid black;
    /* max-width: 20rem; */
    /* padding-left: 5rem;
    padding-right: 5rem; */
    text-align: center;
    min-width: 16rem;
    height: 4rem;
    filter: grayscale();
    opacity: 0.6;
  }
  & select {
    border: 1px solid black;
    min-width: 16rem;
    height: 4rem;
    /* filter: grayscale(); */
    /* opacity: 0.6; */
  }
`;

const StyledContainerEditSave = styled.div`
  display: flex;
  position: absolute;
  gap: 0.95rem;
  top: 28px;
  right: -35px;
  flex-direction: column;
  /* background-color: red; */
  /* gap: 1rem; */

  /* align-items: flex-end; */
`;

const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileFormEdit = ({ user }) => {
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

  const { handleSubmit } = useForm();

  const [disable, setDisable] = useState(true);

  // const onsubmit = ({ data }) => {
  //   // mutate({ data });
  //   console.log(data);
  // };

  let onsubmit;

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-9 ">
      <StyledFormDiv>
        <LabelInputDiv className=" flex flex-col">
          <label>full-name</label>
          <input
            disabled
            value={displayName}
            className={`${disable === true ? "opacity-50" : "opacity-100"}`}
          />
        </LabelInputDiv>
      </StyledFormDiv>
      <StyledFormDiv>
        <LabelInputDiv>
          <label>Email</label>
          <input
            disabled
            value={email}
            className={`border-none ${
              disable === true ? "opacity-50" : "opacity-100"
            }`}
          />
        </LabelInputDiv>
      </StyledFormDiv>
      <StyledFormDiv>
        <LabelInputDiv>
          <label>state</label>
          <input disabled={disable} ref={inputRefState} value={State} />
        </LabelInputDiv>
        <StyledContainerEditSave>
          {
            <EditSaaveButton
              onClick={(e) => {
                e.preventDefault();
                inputRefState.current.focus();
                inputRefState.current.disabled = false;
              }}
            >
              <PiNotePencilThin />
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
              <RiSave2Fill />
            </EditSaaveButton>
          }
        </StyledContainerEditSave>
      </StyledFormDiv>

      <StyledFormDiv>
        <LabelInputDiv>
          <label>Local-Govt</label>
          <select>
            <option>Abeokuta-south</option>
            <option>Abeokuta-North</option>
          </select>
        </LabelInputDiv>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefLocalGovt.current.focus();
              inputRefLocalGovt.current.disabled = false;
            }}
          >
            <PiNotePencilThin />
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefLocalGovt.current.disabled = true;
              mutate({ localGovt });
            }}
          >
            <RiSave2Fill />
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <LabelInputDiv>
          <label>NIN</label>
          <input
            disabled={disable}
            ref={inputRefNIN}
            onChange={(e) => setNin(e.target.value)}
            value={NIN}
          />
        </LabelInputDiv>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefNIN.current.focus();
              inputRefNIN.current.disabled = false;
            }}
          >
            <PiNotePencilThin />
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              mutate({ NIN });
            }}
          >
            <RiSave2Fill />
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <LabelInputDiv>
          <label>Gender</label>
          <select
            onChange={(e) => setgender(e.target.value)}
            value={gender}
            ref={inputRefGener}
            className={` ${
              disable === true ? "opacity-50" : "opacity-100"
            }  w-full`}
          >
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>
          {/* disabled={disable}
            ref={inputRefGener}
            onChange={(e) => setgender(e.target.value)}
            className={` ${disable === true ? "opacity-50" : "opacity-100"}`}
            value={gender}
          /> */}
        </LabelInputDiv>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefGener.current.focus();
              inputRefGener.current.disabled = false;
              inputRefGener.current.opacity = "1";
            }}
          >
            <PiNotePencilThin />
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefGener.current.disabled = true;
              inputRefGener.current.disabled = false;

              mutate({ gender });
            }}
          >
            <RiSave2Fill />
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>

      <StyledFormDiv>
        <LabelInputDiv>
          <label className="">Home-Address</label>
          <input
            disabled={disable}
            ref={inputRefHomeAddress}
            onChange={(e) => setHomeAdress(e.target.value)}
            value={homeAdress}
          />
        </LabelInputDiv>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefHomeAddress.current.focus();
            }}
          >
            <PiNotePencilThin />
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefHomeAddress.current.focus();
              inputRefHomeAddress.current.disable = true;
              mutate({ homeAdress });
            }}
          >
            <RiSave2Fill />
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      <StyledFormDiv>
        <LabelInputDiv>
          <label>Office-Address</label>
          <input
            disabled={disable}
            ref={inputRefOfficeAddress}
            value={officeAdress}
            onChange={(e) => setOfficeAdress(e.target.value)}
          />
        </LabelInputDiv>
        <StyledContainerEditSave>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefOfficeAddress.current.focus();
              inputRefOfficeAddress.current.disabled = false;
            }}
          >
            <PiNotePencilThin />
          </EditSaaveButton>
          <EditSaaveButton
            onClick={(e) => {
              e.preventDefault();
              inputRefOfficeAddress.current.focus();
              inputRefOfficeAddress.current.disabled = true;
              mutate({ officeAdress });
            }}
          >
            <RiSave2Fill />
          </EditSaaveButton>
        </StyledContainerEditSave>
      </StyledFormDiv>
      {/* <StyledFormDiv></StyledFormDiv> */}
    </form>
  );
};

export default ProfileFormEdit;

function EditSaaveButton({ onClick, children }) {
  return (
    <div className=" gap-4">
      <button
        onClick={onClick}
        className="border-[1px] text-[#000]    rounded-lg py-1 px-1"
      >
        {children}
      </button>
    </div>
  );
}
