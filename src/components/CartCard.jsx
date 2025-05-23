import { useLocation } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { GridInner } from "./Grid";

import bg from "../assets/images/illus.jpg";

import styled from "styled-components";
import { useDeleteMutateForSale } from "../hooks/useDeleteMutate";

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
  const { propertyDetails, price, title, id } = document;
  console.log(document);

  // const { deleteDocument, response } = useFirestore("Outlets");
  const { mutate } = useDeleteMutateForSale("Outlets");

  const location = useLocation();

  const deleteCart = location.pathname === "/myaccount/myproperties";

  return (
    <GridInner className=" gap-8 text-4xl rounded-3xl relative ">
      <div className="w-full h-full text-center px-4 py-8  flex flex-col gap-1 justify-center items-center">
        <div className="w-[100%] flex items-center justify-center ">
          <iframe
            width="170"
            height="265"
            src="https://www.youtube.com/embed/K54Kg-QE1MY?si=t_aLDJyiblJciPwA"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <h1 className="text-[18px] uppercase">{title}</h1>
        <p className=" text-lg">{price}</p>
        <p className="h-[7rem] text-lg ">{propertyDetails}</p>
        {deleteCart && (
          <button
            onClick={() => mutate(id)}
            className="2xl  absolute right-3 top-3"
          >
            <MdDelete className="text-gray-400" />
          </button>
        )}
      </div>
    </GridInner>
  );
}

export default CartCard;
