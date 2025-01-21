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
    <div className="flex mt-20  flex-col items-center w-full">
      <div className="">
        <Heading as="h2" className="text-center uppercase mb-12">
          Properties to let
        </Heading>
      </div>
      <div className="flex justify-between items-center w-full px-8 mb-10 font-bold text-2xl">
        <p>Properties</p>
        <p>Agents</p>
      </div>
      {documents &&
        documents.map((document, index) => {
          return (
            <div
              key={document.id}
              className="text-lg mt-10 text-center flex flex-col"
            >
              <div className="flex px-9  gap-12 items-center">
                <span className="flex gap-4 w-3/4 text-center ">
                  {index + 1}
                  <p className="">
                    {document.propertyDescription}, {document.propertyLocation}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi, laudantium.
                  </p>
                </span>
                <div className="w-1/4">{document.agentName}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
