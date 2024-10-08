import { createContext, useContext } from "react";
import styled from "styled-components";

// const StyledTable = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  grid-template-rows: ${(props) => props.$rows};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 0.8rem 1.6rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  /* @media (max-width: 31rem) {
    padding: 1.6rem 2.4rem;
  } */
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  text-transform: none;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

// const Empty = styled.p`
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-align: center;
//   margin: 2.4rem;
// `;

const TableContext = createContext();

function Table({ children, columns, rows }) {
  return (
    <TableContext.Provider value={{ columns, rows }}>
      <StyledHeader role="table">{children}</StyledHeader>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns, rows } = useContext(TableContext);
  return (
    <StyledHeader role="row" $columns={columns} $rows={rows}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns, rows } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={columns} $rows={rows}>
      {children}
    </StyledRow>
  );
}

function Body({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledBody role="role" $columns={columns}>
      {children}
    </StyledBody>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
