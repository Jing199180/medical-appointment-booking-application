import { useDoctors } from "./useDoctors";
import { useSearchParams } from "react-router-dom";

import DoctorRow from "./DoctorRow";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.8fr 1fr 1fr 1.5fr 1.5fr 0.5fr 0.5fr 0.5fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

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

  const { isLoading, doctors } = useDoctors();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1)filter
  const filterValue = searchParams.get("location") || "all";

  let filteredDoctors;
  if (filterValue === "all") filteredDoctors = doctors;
  if (filterValue === "north")
    filteredDoctors = doctors.filter(
      (doctor) => doctor.location === "North Taiwan"
    );
  if (filterValue === "central")
    filteredDoctors = doctors.filter(
      (doctor) => doctor.location === "Central Taiwan"
    );
  if (filterValue === "south")
    filteredDoctors = doctors.filter(
      (doctor) => doctor.location === "South Taiwan"
    );
  if (filterValue === "east")
    filteredDoctors = doctors.filter(
      (doctor) => doctor.location === "East Taiwan"
    );

  // 2)sort

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  console.log(field, direction);

  const modifier = direction === "asc" ? 1 : -1;

  const sortedDoctors = filteredDoctors.sort((a, b) => {
    // console.log(a[field], b[field]);
    if (typeof a[field] === "string" && typeof b[field] === "string")
      return a[field].localeCompare(b[field]) * modifier;

    if (typeof a[field] === "number" && typeof b[field] === "number") {
      return (a[field] - b[field]) * modifier;
    }

    return 0;
  });

  console.log(sortedDoctors);
  return (
    <Menus>
      <Table columns="0.8fr 1fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div></div>
          <div>Full Name</div>
          <div>Speciality</div>
          <div>Location</div>
        </Table.Header>
        <Table.Body>
          {sortedDoctors.map((doctor) => (
            <DoctorRow doctor={doctor} key={doctor.id} />
          ))}
        </Table.Body>
      </Table>
    </Menus>
  );
}

export default DoctorTable;
