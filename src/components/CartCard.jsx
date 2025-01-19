import { useFirestore } from "../hooks/useFirestore";
import { useLocation } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";

import bg from "../assets/images/illus.jpg";

import styled from "styled-components";

export const StyledCartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  text-align: center;
  padding: 3rem;
  gap: 2rem;
  border-radius: 1.5rem;
  box-shadow: 7px 3px 8px rgba(85, 85, 85, 0.487);
`;

function CartCard({ document }) {
  const { deleteDocument, response } = useFirestore("Outlets");
  const { user } = useAuthContext();

  const location = useLocation();

  const deleteCart = location.pathname === "/profile";

  return (
    <StyledCartCard className=" gap-8 text-4xl rounded-3xl relative">
      <div className="h-40 w-60 ">
        <img alt="image" src={bg} />
      </div>
      <h1 className="text-[18px] uppercase">{document.title}</h1>
      <p className="text-lg">{document.price}</p>
      <p className="text-lg w-2/3 h-2/5">{document.propertyDetails}</p>
      {deleteCart && (
        <button
          onClick={() => deleteDocument(document.id)}
          className="2xl absolute right-3 top-3"
        >
          <MdDelete className="text-gray-400" />
        </button>
      )}
    </StyledCartCard>
  );
}

export default CartCard;
