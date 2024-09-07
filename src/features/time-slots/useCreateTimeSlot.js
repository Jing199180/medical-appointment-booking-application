import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTimeSlot as createTimeSlotApi } from "../../services/apiTimeSlots";
import toast from "react-hot-toast";

export function useCreateTimeSlot() {
  const queryClient = useQueryClient();
  const { mutate: createTimeSlot, isLoading: isCreating } = useMutation({
    mutationFn: createTimeSlotApi,
    onSuccess: () => {
      toast.success("TimeSlot successfully created");
      queryClient.invalidateQueries({
        queryKey: ["time-slots"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createTimeSlot, isCreating };
}
