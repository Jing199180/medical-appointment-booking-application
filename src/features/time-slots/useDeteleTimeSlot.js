import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTimeSlot as deleteTimeSlotApi } from "../../services/apiTimeSlots";
import toast from "react-hot-toast";

export function useDeleteTimeSlot() {
  const queryClient = useQueryClient();
  const { mutate: deleteTimeSlot, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTimeSlotApi,
    onSuccess: () => {
      toast.success("Time Slot is successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["time-slots"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { deleteTimeSlot, isDeleting };
}
