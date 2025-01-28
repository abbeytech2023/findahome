// Subscribing to realtime data from a firestore collection
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useCollections = (c) => {
  const { user } = useAuthContext();
  const [documents, setDocuments] = useState();
  const [error, setError] = useState(null);
  const [oneDocument, setOneDocument] = useState();

  useEffect(() => {
    let ref = collection(db, c);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        //update state
        console.log(results);

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    const docRef = doc(db, c, user.uid);
    getDoc(docRef).then((snapshot) => setOneDocument(snapshot));

    //unsubscrbe onsnapshot
    return () => {
      unsubscribe();
    };
  }, [c, user.uid]);

  return { oneDocument, documents, error };
};
