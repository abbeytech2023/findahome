import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("wrong email and password");

      dispatch({ type: "LOGIN", payload: res.user });

      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.message.code);

      let error;
      if (err.code === "auth/network-request-failed")
        error = "poor network connection";
      if (err.code === "auth/invalid-login-credentials")
        error = "invalid login credentials";

      setError(error);
      setIsPending(false);
    }
  };

  return { isPending, error, login };
};
