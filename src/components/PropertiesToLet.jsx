import styled from "styled-components";
import { Heading } from "./HeadingText";
import { useLocation } from "react-router-dom";
import SpinnerMini from "./SpinnerMini";
import { ToLetCart } from "./ToLetCart";
import { useFetchPropertiesTolet } from "../hooks/useFetchProperties";

const StyledLi = styled.li`
  display: flex;

  & span {
    display: flex;

    gap: 1.8rem;
    width: 50%;
  }
`;

export default function PropertiesToLet({ propToLet, isPending }) {
  const location = useLocation();

  return (
    <div className=" ">
      {/* {error && <p>{error}</p>} */}
      <Heading as="h2" className=" uppercase text-center mb-16">
        Properties to let
      </Heading>

      {isPending && <SpinnerMini />}

      <ToLetCart documents={propToLet} isPending={isPending} />
    </div>
  );
}
