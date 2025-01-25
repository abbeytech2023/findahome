// // Subscribing to realtime data from a firestore collection
// import { useEffect, useState } from "react";
// import { db } from "../firebase/config";

// import { collection, onSnapshot } from "firebase/firestore";

// export const useCollection = (c) => {
//   const [documents, setDocuments] = useState();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let ref = db(c);
//     console.log(ref);

//     const unsubscribe = onSnapshot(
//       ref,

//       (snapshot) => {
//         let results = [];
//         snapshot.docs.forEach((doc) => {
//           results.push({ ...doc.data(), id: doc.id });
//         });
//         //update state
//         console.log(results);

//         setDocuments(results);
//         setError(null);
//       },
//       (error) => {
//         console.log(error);
//         setError("could not fetch the data");
//       }
//     );

//     // unsubscrbe onsnapshot
//     return () => unsubscribe();
//   }, [c]);

//   return {};
// };
