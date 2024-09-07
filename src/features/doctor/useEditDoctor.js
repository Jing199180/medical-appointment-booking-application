import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditDoctor } from "../../services/apiDoctors";

export function useEditDoctor() {
  const queryClient = useQueryClient();

  const { mutate: editDoctor, isLoading: isEditing } = useMutation({
    mutationFn: ({ newDoctorData, id }) => createEditDoctor(newDoctorData, id),
    onSuccess: () => {
      toast.success("Doctor successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Doctors"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editDoctor, isEditing };
}
