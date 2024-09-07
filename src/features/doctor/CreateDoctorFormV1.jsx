import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createDoctor } from "../../services/apiDoctors";

function CreateDoctorForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      toast.success("Doctor successfully created");
      queryClient.invalidateQueries({
        queryKey: ["Doctors"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // console.log(data);
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="First name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          disabled={isCreating}
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Last name" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          disabled={isCreating}
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Speciality" error={errors?.speciality?.message}>
        <Input
          type="text"
          id="speciality"
          disabled={isCreating}
          {...register("speciality", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Location" error={errors?.location?.message}>
        <Input
          type="text"
          id="location"
          disabled={isCreating}
          {...register("location", { required: "This field is required" })}
        />
      </FormRow>

      {/* <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" />
      </FormRow> */}

      <FormRow label="Upload Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add doctor</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDoctorForm;
