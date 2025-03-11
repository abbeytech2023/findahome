import { useQuery } from "@tanstack/react-query";
import { fetchCollectionToLet } from "./useCollections";

export const useFetchPropertiesTolet = () => {
  const { data: documents, isPending } = useQuery({
    queryKey: ["Tolet"],
    queryFn: fetchCollectionToLet,
  });

  return { documents, isPending };
};

export const useFetchPropertiesForSale = () => {
  const { data: documents, isPending } = useQuery({
    queryKey: ["Outlet"],
    queryFn: fetchCollectionToLet,
  });

  return { documents, isPending };
};
