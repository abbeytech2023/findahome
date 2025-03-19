import ProductCart from "../components/ProductCart";
import PropertiesToLet from "../components/PropertiesToLet";
import SideNavBar from "../components/SideNavBar";
import Spinner from "../components/Spinner";
import SpinnerMini from "../components/SpinnerMini";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserCollections } from "../hooks/useUserCollections";

export default function MyProperties() {
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
    <div className="flex flex-col">
      {!documents || !propToLet ? <Spinner /> : null}
      {documents && <ProductCart documents={documents} />}
      {propToLet && <PropertiesToLet propToLet={propToLet} />}
    </div>
  );
}
