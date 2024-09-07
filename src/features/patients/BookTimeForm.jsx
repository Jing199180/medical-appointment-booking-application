import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking as createBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { updateTimeSlot as updateTimeSlotApi } from "../../services/apiTimeSlots";

function BookTimeForm({ availableDate, onCloseModal }) {
  const { id } = availableDate;
  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;
  console.log("Available date:", availableDate);

  const queryClient = useQueryClient();

  const { mutate: updateTimeSlot } = useMutation({
    mutationFn: updateTimeSlotApi,
    onSuccess: (data) => {
      console.log("Updated time slot data:", data);
      toast.success("Time slot successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["time-slots"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully created");

      console.log("Updating time slot with ID:", id, "to set booked: true");
      updateTimeSlot({ id, newSlotData: { booked: true } });

      queryClient.invalidateQueries({
        queryKey: ["Bookings"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log("onSubmit triggered");

    const { startTime, endTime } = data;

    if (startTime >= endTime) {
      toast.error("End Time must be greater than Start Time");
      reset();
      return;
    }

    const formData = { ...data, ...availableDate };
    console.log(formData);
    createBooking(formData);

    reset();
    onCloseModal?.();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="姓名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isCreating}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="信箱" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isCreating}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="電話" error={errors?.phone?.message}>
        <Input
          type="tel"
          id="phone"
          disabled={isCreating}
          {...register("phone", {
            required: "This field is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          取消
        </Button>
        <Button>立即預約</Button>
      </FormRow>
    </Form>
  );
}

export default BookTimeForm;
