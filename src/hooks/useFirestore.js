//ADDING AND DELETING FILES FROM OUR FIRESTORE DATABASE
import { useReducer } from "react";
import { db, timestamp } from "../firebase/config";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

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
    case "ERROR":
      return {
        isPending: "completed",
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      throw new Error("unknown action");
  }
};

export const useFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
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

  //Getting a document
  // const docRef = doc(db, "books", "5I6NuEqDwdgBmzc4lnr9");

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const ref = doc(db, c, id);
      const deletedDocument = await deleteDoc(ref);
      dispatchIfNotCancelled({
        type: "DELETED_DOCUMENT",
        payload: deletedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "could not delete" });
    }
  };

  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { addDocument, deleteDocument, response };
};
