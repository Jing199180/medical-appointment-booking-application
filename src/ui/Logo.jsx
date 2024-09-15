import styled from "styled-components";

const StyledLogo = styled.div`
  /* height: 50%; */
  text-align: center;
  align-items: center;
`;

const Img = styled.img`
  height: 4.8rem;
  width: auto;

  @media (max-width: 60rem) {
    height: 3.2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/img/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
