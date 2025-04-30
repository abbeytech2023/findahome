import styled from "styled-components";
import { Heading } from "./HeadingText";
import { useLocation } from "react-router-dom";
import SpinnerMini from "./SpinnerMini";
import { ToLetCart } from "./ToLetCart";
import { GridContainer } from "./Grid";

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
      <div>
        {propToLet &&
          propToLet.map((prop) => {
            return (
              <div
                key={prop.uid}
                className="bg-red-800 flex  justify-center items-center  flex-row"
              >
                <ToLetCart
                  documents={prop}
                  isPending={isPending}
                  className="flex"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
