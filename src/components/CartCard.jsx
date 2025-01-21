import { useFirestore } from "../hooks/useFirestore";
import { useLocation } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";
import { GridInner } from "./Grid";

import bg from "../assets/images/illus.jpg";

import styled from "styled-components";

export const StyledCartCard = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  text-align: center;
  padding: 3rem;
  gap: 2rem;
  border-radius: 1.5rem;
  box-shadow: 7px 3px 8px rgba(85, 85, 85, 0.487); */
`;

function CartCard({ document }) {
  const { deleteDocument, response } = useFirestore("Outlets");
  const { user } = useAuthContext();

  const location = useLocation();

  const deleteCart = location.pathname === "/profile";

  return (
    <GridInner className=" gap-8 text-4xl rounded-3xl relative">
      <div className="w-full h-full px-4 py-8 flex flex-col gap-1 justify-center items-center">
        <div className="w-2/4 ">
          <img alt="image" src={bg} />
        </div>
        <h1 className="text-[18px] uppercase">{document.title}</h1>
        <p className=" text-lg">{document.price}</p>
        <p className="h-[7rem] text-lg ">
          {document.propertyDetails} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id, omnis.
        </p>
        {deleteCart && (
          <button
            onClick={() => deleteDocument(document.id)}
            className="2xl absolute right-3 top-3"
          >
            <MdDelete className="text-gray-400" />
          </button>
        )}
      </div>
    </GridInner>
  );
}

export default CartCard;
