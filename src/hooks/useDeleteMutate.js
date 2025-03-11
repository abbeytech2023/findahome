import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "./useFirestore";
import toast from "react-hot-toast";

export const useDeleteMutate = (key) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteDocument(id),
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { mutate };
};
