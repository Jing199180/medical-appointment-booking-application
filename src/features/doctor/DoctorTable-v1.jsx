import { useDoctors } from "./useDoctors";

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import DoctorRow from "./DoctorRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr 1.5fr 1.5fr 0.5fr 0.5fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function DoctorTable() {
  // const {
  //   isLoading,
  //   data: doctors,
  //   error,
  // } = useQuery({
  //   queryKey: ["Doctors"],
  //   queryFn: getDoctors,
  // });
  //抽取出來並且放進一個名為useDoctors的hook

  const { isLoading, doctors, error } = useDoctors();

  if (isLoading) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Speciality</div>
        <div>Location</div>
      </TableHeader>
      {doctors.map((doctor) => (
        <DoctorRow doctor={doctor} key={doctor.id} />
      ))}
    </Table>
  );
}

export default DoctorTable;
