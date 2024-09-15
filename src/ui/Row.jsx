import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      @media (max-width: 31rem) {
        flex-direction: column;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
