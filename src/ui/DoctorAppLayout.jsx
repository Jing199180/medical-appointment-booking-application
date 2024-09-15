import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DoctorHeader from "./DoctorHeader";
import DoctorSidebar from "./DoctorSidebar";
import DoctorFooter from "./DoctorFooter";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 45rem) {
    grid-template-columns: 85rem;
    width: 100vh;
  }

  @media (max-width: 31rem) {
    grid-template-columns: 80rem;
  }
`;

const Main = styled.main`
  padding: 3.2rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: scroll;

  @media (max-width: 72rem) {
    padding: 2.4rem 3.2rem 4.8rem;
  }

  @media (max-width: 60rem) {
    padding: 1.6rem 2.4rem 3.2rem;
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }

  @media (max-width: 45rem) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 120rem;
  margin: 0 auto;
`;

function DoctorAppLayout() {
  return (
    <StyledAppLayout>
      <DoctorHeader />
      <DoctorSidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <DoctorFooter />
    </StyledAppLayout>
  );
}

export default DoctorAppLayout;
