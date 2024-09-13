import { Outlet } from "react-router-dom";

import PatientHeader from "./PatientHeader";
import PatientSidebar from "./PatientSidebar";

import styled from "styled-components";
import PatientFooter from "./PatientFooter";

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

function PatientAppLayout() {
  return (
    <StyledAppLayout>
      <PatientHeader />
      <PatientSidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <PatientFooter />
    </StyledAppLayout>
  );
}

export default PatientAppLayout;
