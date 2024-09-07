import { useState } from "react";
import styled from "styled-components";

import CreateDoctorForm from "./CreateDoctorForm";
import { useDeleteDoctor } from "./useDeleteDoctor";

import { IoDuplicate } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useCreateDoctor } from "./useCreateDoctor";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr 1.5fr 1.5fr 0.5fr 0.5fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Doctor = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Location = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Speciality = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function DoctorRow({ doctor }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteDoctor } = useDeleteDoctor();
  const { isCreating, createDoctor } = useCreateDoctor();

  const {
    id: doctorId,
    image,
    firstName,
    lastName,
    speciality,
    location,
  } = doctor;

  // const queryClient = useQueryClient();

  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: deleteDoctor,
  //   onSuccess: () => {
  //     toast.success("Doctor successfully deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["Doctors"],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  //把這段代碼抽取出來，製作出useDeleteDoctor.js的custom hook

  function handleDuplicate() {
    createDoctor({
      firstName: `Copy of ${firstName}`,
      image,
      lastName,
      speciality,
      location,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Doctor>{firstName}</Doctor>
        <Doctor>{lastName}</Doctor>
        <Speciality>{speciality}</Speciality>
        <Location>{location}</Location>
        <Button onClick={() => handleDuplicate()} disabled={isCreating}>
          <IoDuplicate />
        </Button>
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          <FaUserEdit />
        </Button>
        <Button onClick={() => deleteDoctor(doctorId)} disabled={isDeleting}>
          <MdDeleteForever />
        </Button>
      </TableRow>
      {showForm && <CreateDoctorForm doctorToEdit={doctor} />}
    </>
  );
}

export default DoctorRow;
