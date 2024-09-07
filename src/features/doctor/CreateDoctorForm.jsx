import { useCreateDoctor } from "./useCreateDoctor";
import { useEditDoctor } from "./useEditDoctor";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";

function CreateDoctorForm({ doctorToEdit = {}, onCloseModal }) {
  const { id: editId, ...restEditValues } = doctorToEdit;
  const isEditSession = Boolean(editId); //增加代碼可讀性

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? restEditValues : {},
  });
  const { errors } = formState;

  // const queryClient = useQueryClient();

  // const { mutate: createDoctor, isLoading: isCreating } = useMutation({
  //   mutationFn: createEditDoctor,
  //   onSuccess: () => {
  //     toast.success("Doctor successfully created");
  //     queryClient.invalidateQueries({
  //       queryKey: ["Doctors"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  // 抽取這段程式碼，製作一個名為useCreateDoctor的custom hook

  // const { mutate: editDoctor, isLoading: isEditing } = useMutation({
  //   mutationFn: ({ newDoctorData, id }) => createEditDoctor(newDoctorData, id),
  //   onSuccess: () => {
  //     toast.success("Doctor successfully edited");
  //     queryClient.invalidateQueries({
  //       queryKey: ["Doctors"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  // 抽取這段程式碼，製作一個名為useEditDoctor的custom hook

  const { isCreating, createDoctor } = useCreateDoctor();
  const { isEditing, editDoctor } = useEditDoctor();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    // console.log(data);
    if (isEditSession)
      editDoctor(
        { newDoctorData: { ...data, image: image }, id: editId },
        {
          onSuccess: (data) => {
            reset(data);
            onCloseModal?.();
          },
        }
      );
    else
      createDoctor(
        { ...data, image: data.image[0] },
        {
          onSuccess: (data) => {
            reset(data);
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Full name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isWorking}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Speciality" error={errors?.speciality?.message}>
        <Input
          type="text"
          id="speciality"
          disabled={isWorking}
          {...register("speciality", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Location" error={errors?.location?.message}>
        <Input
          type="text"
          id="location"
          disabled={isWorking}
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
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit" : "Create new doctor"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateDoctorForm;
