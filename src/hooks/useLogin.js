import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (emails, password) => {
    setError(null);
    setIsPending(true);

    const email = emails.trim();
    // const password = passwords.trim();

    //Sign the user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      setError(null);
      setIsPending(false);
    } catch (err) {
      let error;
      if (err.code === "auth/internal-error")
        error = "Invalid login credentials";
      if (err.code === "auth/network-request-failed")
        error = "poor server connection";

      console.log(err);
      setError(error);
      setIsPending(false);
    }
  };

  return { isPending, error, login };
};
