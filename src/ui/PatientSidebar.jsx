import styled from "styled-components";
import Logo from "./Logo";
import PatientMainNav from "./PatientMainNav";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  padding: 3.2rem 4.8rem;
  grid-row: 1 / -1;

  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  @media (max-width: 72rem) {
    padding: 2.4rem 3.2rem;
  }

  @media (max-width: 60rem) {
    padding: 1.2rem 2.4rem;
    /* flex-direction: row; */
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    /* align-items: center; */
  }
`;

function PatientSidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <PatientMainNav />
    </StyledSidebar>
  );
}

export default PatientSidebar;
