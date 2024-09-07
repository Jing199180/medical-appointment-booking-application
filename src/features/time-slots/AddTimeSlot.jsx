import styled from "styled-components";
import CreateTimeSlotForm from "./CreateTimeSlotForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
  justify-content: center;
`;

function AddTimeSlot({ date }) {
  return (
    <StyledContainer>
      <Modal>
        <Modal.Open opens="slot-form">
          <Button size="large">Add Time</Button>
        </Modal.Open>

        <Modal.Window name="slot-form">
          <CreateTimeSlotForm date={date} />
        </Modal.Window>

        {/* <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>

        <Modal.Window name="table">
          <DoctorTable />
        </Modal.Window> */}
      </Modal>
    </StyledContainer>
  );
}

export default AddTimeSlot;
