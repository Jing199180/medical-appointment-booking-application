import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 400;

      @media (max-width: 31rem) {
        font-size: 1.8rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 400;

      @media (max-width: 31rem) {
        font-size: 1.6rem;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 400;

      @media (max-width: 45rem) {
        text-align: center;
      }
    `}
`;

export default Heading;
