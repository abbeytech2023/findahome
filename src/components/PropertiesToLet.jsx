import styled from "styled-components";
import { useCollections } from "../hooks/useCollections";
import { StyledCartCard } from "./CartCard";
import { Heading } from "./HeadingText";
import { GridContainer, GridInner } from "./Grid";

const StyledLi = styled.li`
  display: flex;

  & span {
    display: flex;

    gap: 1.8rem;
    width: 50%;
  }
`;

export default function PropertiesToLet() {
  const { documents, error } = useCollections("ToLets");

  return (
    <div className=" ">
      {error && <p>{error}</p>}
      <Heading as="h2" className=" uppercase text-center mb-16">
        Properties to let
      </Heading>
      {documents &&
        documents.map((doc) => {
          return (
            // <Heading></Heading>
            <GridContainer key={doc.id}>
              <div className="flex justify-center items-center text-[0.4rem] px-4 gap-4 ">
                <div className="flex flex-col items-center justify-center text-lg max-w-[70%] min-w-32 text-center bg-[#e3e3fa] py-6  gap-6 px-7">
                  <h2>Property</h2>
                  <div className="w-60">
                    <p>
                      {doc.propertyDescription},{doc.propertyLocation}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, dolore?
                    </p>
                  </div>
                </div>
                <span className="w-28 text-lg bg-[#ffe5e5] text-center">
                  <h2 className="mb-4">Agent</h2> <p>{doc.agentName} </p>
                </span>
              </div>
            </GridContainer>
          );
        })}
    </div>
  );
}
