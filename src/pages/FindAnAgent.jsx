import { Heading } from "../components/HeadingText";
import StarRating from "../components/StarRating";
import { StyledSpinner } from "../components/Spinner";
import SpinnerMini from "../components/SpinnerMini";
import { useFetchUsers } from "../hooks/useFetchProperties";
import AgentCart from "../components/AgentCart";

export default function FindAnAgent() {
  const { userDoc } = useFetchUsers();

  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-[9rem]">
      <Heading as="h5" className="text-black ">
        Find an Agent
      </Heading>

      {!userDoc && <SpinnerMini />}
      {userDoc && <AgentCart documents={userDoc} />}
    </div>
  );
}
