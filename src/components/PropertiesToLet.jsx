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
    <div className="text-center">
      {/* {error && <p>{error}</p>} */}
      <Heading as="h2" className=" uppercase text-center mb-16">
        Properties to let
      </Heading>

      {isPending && <SpinnerMini />}
      {propToLet?.length === 0 && (
        <p className="uppercase text-3xl">
          You do not have a property listed to let
        </p>
      )}

      <ToLetCart documents={propToLet} isPending={isPending} />
    </div>
  );
}
