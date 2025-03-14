import { useQuery } from "@tanstack/react-query";
import { fetchCollectionForSale, fetchCollectionToLet } from "./useCollections";

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

  console.log(documents, isPending);

  return { documents, isPending };
};
