import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import AvailableTimeRow from "./DoctorTimeRow";
import Heading from "../../ui/Heading";

function DoctorTimeTable({ availableDates }) {
  //1) filter
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status") || "all";

  let filteredAvailableDates;
  if (filteredValue === "all") filteredAvailableDates = availableDates;
  if (filteredValue === "unbooked")
    filteredAvailableDates = availableDates.filter(
      (availableDate) => availableDate.booked === false
    );
  if (filteredValue === "booked")
    filteredAvailableDates = availableDates.filter(
      (availableDate) => availableDate.booked === true
    );

  //2) sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  console.log(field, direction);

  const modifier = direction === "asc" ? 1 : -1;

  const sortedAvailableDates = filteredAvailableDates.sort((a, b) => {
    // console.log(a[field], b[field]);

    if (typeof a[field] === "string" && typeof b[field] === "string")
      return a[field].localeCompare(b[field]) * modifier;

    if (typeof a[field] === "number" && typeof b[field] === "number") {
      return (a[field] - b[field]) * modifier;
    }

    return 0;
  });

  return (
    <Table columns="1fr 1fr 1fr 0.5fr">
      <Table.Header>
        <div>Date</div>
        <div>Time</div>
        <div>Status</div>
        <div></div>
      </Table.Header>
      <Table.Body>
        {availableDates.length > 0 ? ( //不能單用availableDates去做判斷，因為有可能是空陣列[]
          sortedAvailableDates.map((availableDate) => (
            <AvailableTimeRow
              availableDate={availableDate}
              key={availableDate.id}
            />
          ))
        ) : (
          <Heading as="h2">
            No available time slots for the selected date.
          </Heading>
        )}
      </Table.Body>
    </Table>
  );
}

export default DoctorTimeTable;
