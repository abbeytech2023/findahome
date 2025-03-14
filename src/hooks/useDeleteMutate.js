import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "./useFirestore";
import toast from "react-hot-toast";

export const useDeleteMutateForSale = (key) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteDocument(id, "Outlets"),
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { mutate };
};

export const useDeleteMutateToLets = (key) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteDocument(id, "ToLets"),
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { mutate };
};
