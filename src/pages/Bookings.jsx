import styled from "styled-components";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Style = styled.div`
  display: flex;
  flex-direction: column;
`;
function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Style>
        <BookingTable />
      </Style>
    </>
  );
}

export default Bookings;
