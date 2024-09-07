import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditDoctor } from "../../services/apiDoctors";
import toast from "react-hot-toast";

export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const { mutate: createDoctor, isLoading: isCreating } = useMutation({
    //mutate函數會調用useMutation鉤子中指定的mutationFn函數
    mutationFn: createEditDoctor,
    onSuccess: () => {
      toast.success("Doctor successfully created");
      queryClient.invalidateQueries({
        queryKey: ["Doctors"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createDoctor, isCreating };
}
