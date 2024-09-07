import CreateDoctorForm from "./CreateDoctorForm";

import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
`;

function AddDoctor() {
  return (
    <StyledContainer>
      <Modal>
        <Modal.Open opens="doctor-form">
          <Button>Add new doctor</Button>
        </Modal.Open>

        <Modal.Window name="doctor-form">
          <CreateDoctorForm />
        </Modal.Window>
      </Modal>
    </StyledContainer>
  );
}

// function AddDoctor() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <StyledContainer>
//       <Button
//         onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
//         size="medium"
//       >
//         Add Doctor
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateDoctorForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </StyledContainer>
//   );
// }

export default AddDoctor;
