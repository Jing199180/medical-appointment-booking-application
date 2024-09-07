import Heading from "./Heading";
import PatientHeaderMenu from "./PatientHeaderMenu";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-grey-0);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function PatientHeader() {
  return (
    <StyledHeader>
      <Heading as="h3">訪客</Heading>
      <PatientHeaderMenu />
    </StyledHeader>
  );
}

export default PatientHeader;
