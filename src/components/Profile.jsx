// import Form from "../components";
// import { doc, updateDoc } from "firebase/firestore";
import { fetchCollectionForAUser } from "../hooks/useCollections";

import { useQuery } from "@tanstack/react-query";
import ProfileFormEdit from "./ProfileFormEdit";
import Spinner from "./Spinner";

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// Email regex: /\S+@\S+\.\S+/

function Profile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchCollectionForAUser,
  });

  return (
    <>
      <div className="flex w-full items-center justify-center flex-col text-lg mb-[10rem] ">
        {!user ? <Spinner /> : <ProfileFormEdit user={user} />}
      </div>
    </>
  );
}

export default Profile;
