// Subscribing to realtime data from a firestore collection
import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useUserCollections = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState(null);

  // IF WE DONT WRAP THE _QUERY THEN AN  INFINITE LOOP IS GOING TO HAPPEN
  // _QUERY IS AN ARRAY AND IT IS DIFFERENT ON EVERY FUNCTION CALL
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

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

    //unsubscrbe onsnapshot
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error };
};
