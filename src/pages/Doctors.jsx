import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DoctorTable from "../features/doctor/DoctorTable";
import AddDoctor from "../features/doctor/AddDoctor";
import DoctorTableOperations from "../features/doctor/DoctorTableOperations";

function Doctors() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All doctors</Heading>
        <DoctorTableOperations />
      </Row>
      <Row>
        <DoctorTable />

        {/* <Button
          onClick={() => setShowForm((showForm) => !showForm)}
          size="medium"
        >
          Add Doctor
        </Button>
        {showForm && <CreateDoctorForm />} */}
        <AddDoctor />
      </Row>
    </>
  );
}

export default Doctors;
