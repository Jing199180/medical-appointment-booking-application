import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-grey-0);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 60rem) {
    padding: 1.2rem 2.4rem;
    justify-content: space-between;
  }

  @media (max-width: 45rem) {
    justify-content: flex-start;
  }
`;

function DoctorHeader() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default DoctorHeader;
