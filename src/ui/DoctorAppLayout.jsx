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
`;

const Main = styled.main`
  padding: 3.2rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
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
