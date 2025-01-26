import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //Signup user

      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res.user);

      if (!res) throw new Error("could not complete signup");

      const user = auth.currentUser;

      //add displayName to user
      await updateProfile(user, { displayName });

      //CREATE A USER DOCUMENT
      // await collection("Users").doc(res.user.uid).set({
      //   gender: "",
      //   NIN: "",
      //   State: "",
      //   localGovt: "",
      //   Address: "",
      //   companyName: "",
      //   online: true,
      //   displayName,
      //   // totalRatings:
      // });

      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsPending(false);
    }
  };
  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { error, isPending, signup };
};
