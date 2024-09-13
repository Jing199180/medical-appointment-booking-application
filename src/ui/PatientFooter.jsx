import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 2rem;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  justify-self: center;
`;

function PatientFooter() {
  return (
    <StyledFooter>
      Copyright &copy; 2024 by KC Manual Therapy. All rights reserved.
    </StyledFooter>
  );
}

export default PatientFooter;
