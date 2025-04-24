import { Heading } from "../components/HeadingText";
import StarRating from "../components/StarRating";
import { useCollections } from "../hooks/useCollections";
import styled from "styled-components";
import { useFetchUsers } from "../hooks/useFetchProperties";
import Table from "../components/Table";

const FlexContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  padding: 3rem 2rem;
  background-color: rgba(119, 119, 119, 0.137);

  & table,
  tr,
  th,
  td,
  caption {
    border: 0.5px solid black;
    font-family: "Courier New", Courier, monospace;
    border-collapse: collapse;
    padding: 1rem;
  }
`;

const StyledUserBox = styled.div`
  border: 1px solid black;
  padding: 2rem;
`;

export default function FindAnAgent() {
  const { userDoc } = useFetchUsers();

  console.log(userDoc);

  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-[9rem]">
      <Heading as="h5" className="text-black">
        Find an Agent
      </Heading>

      {
        <FlexContainer className="w-full px-[10rem]">
          {<Table data={userDoc} />}
        </FlexContainer>
      }
    </div>
  );
}
