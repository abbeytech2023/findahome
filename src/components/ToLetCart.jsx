import { MdDelete } from "react-icons/md";
import { GridContainer, GridInner } from "./Grid";
import { useDeleteMutateToLets } from "../hooks/useDeleteMutate";
import styled from "styled-components";

const ToLetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const ToLetCart = ({ documents }) => {
  console.log(documents);

  const deleteCart = location.pathname === "/myaccount";

  const { mutate } = useDeleteMutateToLets("Tolet");
  // {doc.propertyDescription},{doc.propertyLocation}
  return (
    <div>
      <p>
        {documents.propertyDescription},{documents.propertyLocation}
      </p>
      <p>{documents.agentName}</p>
    </div>
  );
};
