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

export const ToLetCart = ({ documents }) => {
  const { mutate } = useDeleteMutateToLets("Tolet");
  console.log(documents);

  return (
    <ToLetContainer className="">
      {documents &&
        documents.map((doc) => {
          return (
            <div
              key={doc.uid}
              className="border-[1px] pt-5 flex flex-col justify-between   border-[#144c6f] w-[12rem]"
            >
              <p className=" px-4">
                {doc.propertyDescription}, {doc.propertyLocation}
              </p>
              <div className="bg-[#bce1f840] mt-5 items-center px-1 py-2">
                <div className=" flex items-center gap-1">
                  <CgProfile />: <p>adetoun</p>
                </div>
                <div className=" flex items-center gap-1 ">
                  <MdDialerSip />:<p>{doc.phoneNumber}</p>
                </div>
              </div>
            </div>
          );
        })}
    </ToLetContainer>
  );
};
