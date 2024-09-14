import React from "react";
import styled from "styled-components";

const StyledFormRowVertical = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr;
    justify-content: flex-end;
    /* gap: 1.2rem; */
    padding-top: 2rem;
  }

  @media (max-width: 45rem) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
  const childId = React.isValidElement(children) ? children.props.id : null; //確定id

  return (
    <StyledFormRowVertical>
      {label && <Label htmlFor={childId}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;
