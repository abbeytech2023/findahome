import ProductCart from "../components/ProductCart";
import PropertiesToLet from "../components/PropertiesToLet";
import { StyledSpinner } from "../components/Spinner";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserCollections } from "../hooks/useUserCollections";

export default function Dashboard() {
  const { user } = useAuthContext();

  const { documents, error } = useUserCollections(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );

  console.log(documents);

  const { documents: propToLet, error: docError } = useUserCollections(
    "ToLets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div className="flex flex-col w-full items-center justify-center text-lg mb-[10rem]">
      <div> {!documents || !propToLet ? <StyledSpinner /> : null} </div>
      <div>{documents && <ProductCart documents={documents} />}</div>

      <div className="">
        {propToLet && <PropertiesToLet propToLet={propToLet} />}{" "}
      </div>
    </div>
  );
}
