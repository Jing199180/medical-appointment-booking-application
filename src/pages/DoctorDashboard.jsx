import DoctorCalendar from "../features/time-slots/DoctorCalendar";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function DoctorDashboard() {
  return (
    <>
      <Row>
        <Heading>Calendar</Heading>
      </Row>
      <Row>
        <DoctorCalendar />
      </Row>
    </>
  );
}

export default DoctorDashboard;
