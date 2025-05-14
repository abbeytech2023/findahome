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
    <div className="flex w-full items-center justify-center text-lg mb-[10rem]">
      {!documents || !propToLet ? <StyledSpinner /> : null}
      {documents && <ProductCart documents={documents} />}
      {propToLet && <PropertiesToLet propToLet={propToLet} />}
    </div>
  );
}
