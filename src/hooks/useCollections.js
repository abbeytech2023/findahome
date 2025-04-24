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

    const unsub = async () => {
      const docRef = doc(db, c, auth.currentUser.uid);
      const snapshot = await getDoc(docRef);

      const oneDoc = snapshot.data();
      setAdoc(oneDoc);
    };

    return () => {
      unsub();
    };
  }, [c]);

  return { aDoc, documents, error };
};

export const fetchCollectionForAUser = async () => {
  const docRef = doc(db, "Users", auth.currentUser.uid);
  const snapshot = await getDoc(docRef);

  const data = snapshot.data();

  console.log(data);

  return data;
};

export const fetchCollectionToLet = async () => {
  let ref = collection(db, "ToLets");

  const querySnapshot = await getDocs(ref);

  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};

export const fetchCollectionForSale = async () => {
  let ref = collection(db, "Outlets");

  const querySnapshot = await getDocs(ref);

  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};

export const fetchUserCollection = async () => {
  let ref = collection(db, "Users");
  const querySnapshot = await getDocs(ref);

  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};
