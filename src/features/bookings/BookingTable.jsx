import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";
import BookingRow from "./BookingRow";

import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Heading from "../../ui/Heading";

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  const [searchParams] = useSearchParams();
  // const {
  //   isLoading,
  //   data: bookings,
  //   error,
  // } = useQuery({
  //   queryKey: ["Bookings"],
  //   queryFn: getBookings,
  // });

  if (isLoading) return <Spinner />; //還在接收資訊時

  //1)filter
  const filteredValue = searchParams.get("status") || "all";

  let filteredBookings;
  if (filteredValue === "all") filteredBookings = bookings;
  if (filteredValue === "unfinished")
    filteredBookings = bookings.filter((booking) => booking.booked === false);
  if (filteredValue === "finished")
    filteredBookings = bookings.filter((booking) => booking.booked === true);

  //2)Sort
  const sortBy = searchParams.get("sortBy") || "start";
  const [field, direction] = sortBy.split("-");
  console.log(field, direction);

  const modifier = direction === "asc" ? 1 : -1; //用於a, b的排序

  filteredBookings.sort((a, b) => {
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
    <Menus>
      <Table columns="1fr 1.2fr 1.5fr 1fr 2fr 1.5fr 0.2fr">
        <Table.Header>
          <div>Full Name</div>
          <div>Date</div>
          <div>Time</div>
          {/* <div>Observation</div> */}
          <div>phone</div>
          <div>email</div>
          <div>status</div>
        </Table.Header>
        <Table.Body>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <BookingRow booking={booking} key={booking.id} />
            ))
          ) : (
            <Heading as="h2">No Booking records</Heading>
          )}
        </Table.Body>
      </Table>
    </Menus>
  );
}

export default BookingTable;
