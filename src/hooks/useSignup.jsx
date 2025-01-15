import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { projectFirestore } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //Signup user

      console.log(projectAuth);

      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(res.user);

      if (!res) throw new Error("could not complete signup");

      //add displayName to user
      await res.user.updateProfile({ displayName });

      //CREATE A USER DOCUMENT
      await projectFirestore.collection("Users").doc(res.user.uid).set({
        online: true,
        displayName,
      });

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
