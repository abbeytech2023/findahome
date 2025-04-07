// import Form from "../components";
// import { doc, updateDoc } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { fetchCollectionForAUser } from "../hooks/useCollections";
import { upDateDocument } from "../hooks/useFirestore";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import ProfileFormEdit from "./ProfileFormEdit";
import Spinner from "./Spinner";
import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import Input from "./Input";

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
      <div className="flex items-center flex-col text-lg mb-[10rem] ">
        {!user ? <Spinner /> : <ProfileFormEdit user={user} />}
      </div>
    </>
  );
}

export default Profile;
