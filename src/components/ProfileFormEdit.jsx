import styled from "styled-components";
import { fetchCollectionForAUser } from "../hooks/useCollections";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { upDateDocument } from "../hooks/useFirestore";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import StyledInput from "./StyledInput";

const StyledProfileBox = styled.div`
  display: flex;

  margin-bottom: 12px;
  filter: grayscale();
  opacity: 0.6;
  & > :first-child {
    width: 7rem;
  }
`;

export default function ProfileFormEdit({ user }) {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [NIN, setNin] = useState();
  const [gender, setgender] = useState();
  const [State, setState] = useState();
  const [localGovt, setLocalGovt] = useState();

  const { mutate } = useMutation({
    mutationFn: (data) => upDateDocument(data),
    onSuccess: () => toast.success("updated successfully"),
  });
  // const { aDoc } = useCollections("Users");

  const { reset, register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const GreyBox = styled.div`
    filter: grayscale();
    opacity: 0.8;
  `;

  useEffect(() => {
    const getUserDetails = () => {
      setDisplayName(user && user.displayName);
      setState(user && user.State);
      setEmail(user && user.email);
      setNin(user && user.NIN);
      setgender(user && user.gender);
      setLocalGovt(user && user.localGovt);
    };
    getUserDetails();
  }, [user]);

  const onSubmit = ({ NIN, gender, State, localGovt }) => {
    mutate({ NIN, gender, State, localGovt });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[1.8rem]"
      >
        <StyledProfileBox>
          <label>FullName</label>
          <StyledInput
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            id="displayName"
            {...register("displayName", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <label>Email</label>
          <StyledInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            {...register("email", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <label>NIN</label>
          <StyledInput
            defaultValue={NIN}
            onChange={(e) => setNin(e.target.value)}
            id="NIN"
            {...register("NIN", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <Label>
            <p>State</p>
          </Label>
          <StyledInput
            defaultValue={State}
            onChange={(e) => setState(e.target.value)}
            id="State"
            {...register("State", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <Label label="Local-govt"> Local-government</Label>
          <StyledInput
            value={localGovt}
            onChange={(e) => setLocalGovt(e.target.value)}
            id="localGovt"
            {...register("localGovt", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <Label>
            <p>Gender</p>
          </Label>
          <StyledInput
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            id="gender"
            {...register("gender", {})}
          />
        </StyledProfileBox>
        <StyledProfileBox>
          <EditSaaveButton label="save" />
          <EditSaaveButton label="edit" />
        </StyledProfileBox>
      </form>
    </div>
  );
}

function Label({ children }) {
  return (
    <div className=" text-[0.9rem]  mr-[5rem] flex flex-row ">{children}</div>
  );
}

function EditSaaveButton({ onClick, label }) {
  return (
    <div className="flex justify-center items-center gap-4 mb-2">
      <button
        onClick={onClick}
        className="border-2 bg-[#144c6f] mt-7 border-white text-white rounded-lg px-8 py-2"
      >
        {label}
      </button>
    </div>
  );
}
