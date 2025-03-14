//ADDING AND DELETING FILES FROM OUR FIRESTORE DATABASE
import { useReducer } from "react";
import { db, timestamp, auth } from "../firebase/config";
import {
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

let initialState = {
  document: null,
  isPending: "completed",
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: "loading", document: null, error: null };
    case "ADDED_DOC":
      return {
        ...state,
        isPending: "completed",
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return {
        isPending: "completed",
        document: null,
        success: true,
        error: null,
      };
    case "UPDATED_DOCUMENT":
      return {
        ...state,
        isPending: "completed",
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: "completed",
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return { ...state };
    // throw new Error("unknown action");
  }
};

export const useFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const { user } = useAuthContext();
  // const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = collection(db, c);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    // if (!isCancelled) {
    dispatch(action);
    // }
  };

  // add a document
  const addDocument = async (doc) => {
    try {
      dispatch({ type: "IS_PENDING" });
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOC",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //update a document
  const updateDocument = async (data) => {
    dispatch({ type: "Is_PENDING" });

    try {
      const ref = doc(db, "Users", auth.currentUser.uid);
      const updateData = { ...data };
      const upDatedDocument = await updateDoc(ref, { ...updateData });
      console.log(updateDocument);

      dispatchIfNotCancelled({
        type: "UPDATED_DOCUMENT",
        payload: { ...updateData },
      });
    } catch (err) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: console.log(err),
      });
    }
  };

  return { updateDocument, addDocument, deleteDocument, response };
};

export const deleteDocument = async (id, c) => {
  const ref = doc(db, c, id);
  const deletedDocument = await deleteDoc(ref);

  return deletedDocument;
};

export const addPropertiesToLet = async (doc) => {
  const ref = collection(db, "ToLets");

  const createdAt = timestamp.fromDate(new Date());
  const addedDocument = await addDoc(ref, { ...doc, createdAt });

  return addedDocument;
};
export const addPropertiesForSale = async (doc) => {
  const ref = collection(db, "Outlets");

  const createdAt = timestamp.fromDate(new Date());
  const addedDocument = await addDoc(ref, { ...doc, createdAt });

  return addedDocument;
};
