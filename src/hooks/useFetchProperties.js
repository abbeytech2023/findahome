import { useQuery } from "@tanstack/react-query";
import {
  fetchCollectionForSale,
  fetchCollectionToLet,
  fetchUserCollection,
} from "./useCollections";

export const useFetchPropertiesTolet = () => {
  const { data: propToLet, isPending } = useQuery({
    queryKey: ["Tolet"],
    queryFn: fetchCollectionToLet,
  });

  return { propToLet, isPending };
};

export const useFetchPropertiesForSale = () => {
  const { data: documents, isPending } = useQuery({
    queryKey: ["Outlet"],
    queryFn: fetchCollectionForSale,
  });

  console.log(documents);

  return { documents, isPending };
};

export const useFetchUsers = () => {
  const { data: userDoc, isPending } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUserCollection,
  });

  console.log(userDoc);

  return { userDoc, isPending };
};
