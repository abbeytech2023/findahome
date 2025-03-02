// Subscribing to realtime data from a firestore collection
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const useCollections = (c) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState(null);
  const [aDoc, setAdoc] = useState();

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

    const unsub = async () => {
      const docRef = doc(db, c, auth.currentUser.uid);
      const snapshot = await getDoc(docRef);

      const oneDoc = snapshot.data();
      setAdoc(oneDoc);
    };

    return () => {
      unsubscribe();
      unsub();
    };
  }, [c]);

  return { aDoc, documents, error };
};

export const fetchCollection = async () => {
  let ref = collection(db, "ToLets");

  const querySnapshot = await getDocs(ref);

  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(data);

  return data;
};
