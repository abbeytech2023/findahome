import { getAuth, sendEmailVerification } from "firebase/auth";

export const EmailVerification = () => {
  const auth = getAuth();
  return sendEmailVerification(auth.currentUser).then(() => {
    console.log("message sent");
  });
};
