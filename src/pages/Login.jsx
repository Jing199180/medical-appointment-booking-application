import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import FormRowVertical from "../ui/FormRowVertical";
import Form from "../ui/Form";
import LoginFooter from "../ui/LoginFooter";

const LoginLayout = styled.main`
  padding-top: 5rem;
  min-height: 100vh;
  min-width: 100vh;
  display: grid;
  grid-template-columns: 64rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  /* background-color: red; */
  /* text-align: center; */
`;

function Login() {
  const navigate = useNavigate();
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h3">醫生入口</Heading>
      <LoginForm />
      <Heading as="h3">預約入口</Heading>
      <Form>
        <FormRowVertical>
          <Button onClick={() => navigate("/patient-dashboard")}>
            立即預約
          </Button>
        </FormRowVertical>
      </Form>
      <LoginFooter />
    </LoginLayout>
  );
}

export default Login;
