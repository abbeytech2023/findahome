import { Heading } from "../components/HeadingText";
import StarRating from "../components/StarRating";
import { useCollections } from "../hooks/useCollections";
import { useFetchUsers } from "../hooks/useFetchProperties";
import AgentCart from "../components/AgentCart";

export default function FindAnAgent() {
  const { userDoc } = useFetchUsers();

  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-[9rem]">
      <Heading as="h5" className="text-black ">
        Find an Agent
      </Heading>

      <AgentCart documents={userDoc} />
    </div>
  );
}
