import StarRating from "../components/StarRating";
import { useCollections } from "../hooks/useCollections";
import styled from "styled-components";

const StyledUserBox = styled.div`
  border: 1px solid black;
  padding: 2rem;
`;

export default function FindAnAgent() {
  const { error, documents } = useCollections("Users");

  return (
    <div className="flex flex-col justify-center gap-4 items-center h-screen">
      <h2>Find an agent</h2>
      {/* <div className=" text-[5rem] flex justify-center items-center w-full">
        <StarRating />
      </div> */}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => {
          return (
            <div key={user.id}>
              {/* <span>
                {user.online && (
                  <span className="inline-block bg-green-700 w-4 h-4 mt-1 mr-3 rounded-lg"></span>
                )}
              </span> */}

              <StyledUserBox>
                <p>FullName: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <p>NIN: {user.NIN}</p>
              </StyledUserBox>
            </div>
          );
        })}
    </div>
  );
}
