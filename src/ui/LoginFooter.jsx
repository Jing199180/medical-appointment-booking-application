import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 2rem;
  text-align: center;
`;

function LoginFooter() {
  return (
    <StyledFooter>
      Copyright &copy; 2024 by KC Manual Therapy. All rights reserved.
    </StyledFooter>
  );
}

export default LoginFooter;
