import StarRating from "../components/StarRating";
import { useCollections } from "../hooks/useCollections";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import SpinnerMini from "../components/SpinnerMini";

const GridContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  padding: 3rem 2rem;
  background-color: rgba(119, 119, 119, 0.137);
`;

const StyledUserBox = styled.div`
  border: 1px solid black;
  padding: 2rem;
`;

export default function FindAnAgent() {
  const { error, documents } = useCollections("Users");

  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-[7rem]">
      <h2>Find an agent</h2>
      {/* <div className=" text-[5rem] flex justify-center items-center w-full">
        <StarRating />
      </div>  */}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => {
          return (
            <>
              <div key={user.id}>
                <StyledUserBox>
                  <p>FullName: {user.displayName}</p>
                  <p>Email: {user.email}</p>
                  <p>NIN: {user.NIN}</p>
                  <div className="flex items-center gap-4">
                    Review: {<StarRating defaultRating={4} />}
                  </div>
                </StyledUserBox>
              </div>
            </>
          );
        })}
    </div>
  );
}
