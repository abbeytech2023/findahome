import styled from "styled-components";
import { useCollection } from "../hooks/useCollection";
import { StyledCartCard } from "./CartCard";
import { Heading } from "./HeadingText";
import { GridContainer, GridInner } from "./Grid";

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  height: auto;
  font-size: large;
  padding: 1rem 2rem;

  & span {
    display: flex;

    gap: 1.8rem;
    width: 50%;
  }
`;

export default function PropertiesToLet() {
  const { documents, error } = useCollection("ToLets");
  console.log(documents);

  return (
    <div className="flex mt-20 flex-col items-center">
      <div className="">
        <Heading as="h2" className="uppercase mb-12">
          Properties to let
        </Heading>
      </div>
      {documents &&
        documents.map((document, index) => {
          return (
            <GridContainer
              key={document.id}
              className="text-2xl mt-10 text-center flex flex-col"
            >
              <GridInner className="flex px-11 ">
                <span className="flex gap-11 ">
                  {index + 1}
                  <p>
                    {document.propertyDescription}, {document.propertyLocation}
                  </p>
                </span>
                <div className="ml-auto">{document.agentName}</div>
              </GridInner>
            </GridContainer>
          );
        })}
    </div>
  );
}
