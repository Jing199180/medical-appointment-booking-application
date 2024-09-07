import { useForm } from "react-hook-form";
import { useCreateTimeSlot } from "./useCreateTimeSlot";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function CreateTimeSlotForm({ date, onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const { createTimeSlot, isCreating } = useCreateTimeSlot();
  // const queryClient = useQueryClient();
  // const { mutate, isLoading: isCreating } = useMutation({
  //   mutationFn: createTimeSlot,
  //   onSuccess: () => {
  //     toast.success("TimeSlot successfully created");
  //     queryClient.invalidateQueries({
  //       queryKey: ["time-slots"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  function onSubmit(data) {
    console.log("onSubmit triggered");
    const { startTime, endTime } = data;

    if (startTime >= endTime) {
      toast.error("End Time must be greater than Start Time");
      reset();
      return;
    }

    const formData = { ...data, date: date.toDateString() };
    console.log(formData);
    createTimeSlot(formData);
    reset();
    onCloseModal?.();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      {/* <Heading as="h2">Select Your available time slot</Heading> */}
      <p>{date.toDateString()}</p>

      <FormRow label="Start Time" error={errors?.startTime?.message}>
        <Input
          type="time"
          id="startTime"
          disabled={isCreating}
          step="60"
          {...register("startTime", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="End Time" error={errors?.endTime?.message}>
        <Input
          type="time"
          id="endTime"
          disabled={isCreating}
          step="60"
          {...register("endTime", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Add Time</Button>
      </FormRow>
    </Form>
  );
}

export default CreateTimeSlotForm;
