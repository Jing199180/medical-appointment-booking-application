import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 64rem;
  align-content: center;
  justify-content: center;
  gap: 1.6rem;
  background-color: var(--color-grey-50);
`;

const HeadingStyled = styled.div`
  justify-self: center;
`;

function Landing() {
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <Logo />
      <HeadingStyled>
        <Heading as="h3">Who are you?</Heading>
      </HeadingStyled>
      <Button size="large" onClick={() => navigate("/patient-dashboard")}>
        Patient
      </Button>
      <Button size="large" onClick={() => navigate("/login")}>
        Doctor
      </Button>
    </LoginLayout>
  );
}

export default Landing;
