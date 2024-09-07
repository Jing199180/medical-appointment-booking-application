import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import PatientTimeRow from "./PatientTimeRow";
import Heading from "../../ui/Heading";

function PatientTimeTable({ availableDates }) {
  //1)filter
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

  //2)sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  console.log(field, direction);

  const modifier = direction === "asc" ? 1 : -1;

  const sortedAvailableDates = filteredAvailableDates.sort((a, b) => {
    // console.log(a[field], b[field]);

    //如果字段是字串類型
    if (typeof a[field] === "string" && typeof b[field] === "string")
      return a[field].localeCompare(b[field]) * modifier;

    //如果字段是數字類型
    if (typeof a[field] === "number" && typeof b[field] === "number") {
      return (a[field] - b[field]) * modifier;
    }

    //其他情況
    return 0;
  });

  return (
    <Table columns="1fr 1fr 1fr 0.5fr" rows="50px">
      <Table.Header>
        <div>日期</div>
        <div>時間</div>
        <div>預約狀態</div>
        <div></div>
      </Table.Header>
      <Table.Body>
        {availableDates.length > 0 ? ( //不能單用availableDates去做判斷，因為有可能是空陣列[]
          sortedAvailableDates.map((availableDate) => (
            <PatientTimeRow
              availableDate={availableDate}
              key={availableDate.id}
            />
          ))
        ) : (
          <Heading as="h2">這個時間段沒有可以預約的時間</Heading>
        )}
      </Table.Body>
    </Table>
  );
}

export default PatientTimeTable;
