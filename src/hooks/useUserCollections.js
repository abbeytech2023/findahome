// Subscribing to realtime data from a firestore collection
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";

export const useUserCollections = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState(null);

  // IF WE DONT WRAP THE _QUERY THEN AN  INFINITE LOOP IS GOING TO HAPPEN
  // _QUERY IS AN ARRAY AND IT IS DIFFERENT ON EVERY FUNCTION CALL
  const q = useRef(_query).current;
  const order = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    if (order) {
      ref = query(ref, orderBy(...order));
    }

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

    //unsubscrbe onsnapshot
    return () => unsubscribe();
  }, [c, q, order]);

  return { documents, error };
};
