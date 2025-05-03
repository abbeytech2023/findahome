import { useState } from "react";
import { auth, db } from "../firebase/config";
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

    //Sign the user out
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // upDateUserDocument

      if (!res) throw new Error("wrong email and password");

      dispatch({ type: "LOGIN", payload: res.user });
      // const userId = "zUXJ3piyJQQjpj3UyBpAHCW4m9x2";
      // db.collection("Users").doc(userId).set({ role: "admin" });

      //verify Admin Role
      // const user = res.user;
      // console.log(user);

      // if (user) {
      //   user.getIdTokenResult().then((idTokenResult) => {
      //     if (idTokenResult.claims.admin) {
      //       console.log("user is admin");
      //     }
      //   });
      // }

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
