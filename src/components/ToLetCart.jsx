import { MdDelete, MdDialerSip } from "react-icons/md";
import { GridContainer, GridInner } from "./Grid";
import { useDeleteMutateToLets } from "../hooks/useDeleteMutate";
import styled from "styled-components";
import { FaMobileRetro } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const ToLetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const StyledDivToLet = styled.div`
  display: flex;
  flex-direction: justify-between;
  border-radius: 1rem;
  box-shadow: 3px 3px 8px rgba(85, 85, 85, 0.487);
  padding-top: 1.2rem;
  width: 15rem;
`;

export const ToLetCart = ({ documents }) => {
  const { mutate } = useDeleteMutateToLets("Tolet");
  console.log(documents);

  return (
    <ToLetContainer className="">
      {documents &&
        documents.map((doc) => {
          return (
            <StyledDivToLet
              key={doc.uid}
              className="  flex flex-col justify-between   border-[#144c6f] w-[12rem]"
            >
              <p className=" px-4">
                {doc.propertyDescription}, {doc.propertyLocation}
              </p>
              <div className="bg-[#bce1f840] mt-5 items-center px-1 py-2">
                <div className=" flex items-center gap-1">
                  <CgProfile />: <p>{doc.agentName}</p>
                </div>
                <div className=" flex items-center gap-1 ">
                  <MdDialerSip />:<p>{doc.phoneNumber}</p>
                </div>
              </div>
            </StyledDivToLet>
          );
        })}
    </ToLetContainer>
  );
};
