// Subscribing to realtime data from a firestore collection
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, id) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(id);
    console.log(ref);

    const unsubscribe = ref.onSnapshot(
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

    // unsubscrbe onsnapshot
    return () => unsubscribe();
  }, [collection]);

  return {};
};
