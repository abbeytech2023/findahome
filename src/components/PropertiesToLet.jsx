import styled from "styled-components";
import { useCollection } from "../hooks/useCollection";
import { StyledCartCard } from "./CartCard";
import { Heading } from "./HeadingText";

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
    <StyledCartCard>
      <div className="flex justify-between px-8 text-large font-medium mt-9">
        <Heading as="h2">your Properties to let</Heading>
      </div>
      {documents &&
        documents.map((document, index) => {
          return (
            <ul
              key={document.id}
              className="text-3xl mt-10 text-center flex flex-col"
            >
              <StyledLi>
                <span>
                  {index + 1}
                  <p>
                    {document.propertyDescription}, {document.propertyLocation}
                  </p>
                </span>
                <div>{document.agentName}</div>
              </StyledLi>
            </ul>
          );
        })}
    </StyledCartCard>
  );
}
