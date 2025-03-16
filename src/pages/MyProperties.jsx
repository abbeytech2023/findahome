import ProductCart from "../components/ProductCart";
import PropertiesToLet from "../components/PropertiesToLet";
import SideNavBar from "../components/SideNavBar";
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
      {!documents ? <SpinnerMini /> : <ProductCart documents={documents} />}
      {!propToLet ? <SpinnerMini /> : <PropertiesToLet propToLet={propToLet} />}
    </div>
  );
}
