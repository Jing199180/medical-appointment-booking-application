import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { ImUser } from "react-icons/im";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 60rem) {
    flex-direction: row;
  }

  @media (max-width: 31rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function DoctorMainNav() {
  return (
    <div>
      <NavList>
        <li>
          <StyledNavLink to="/doctor-dashboard">
            <ImHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <ImCalendar />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Doctors">
            <FaUserDoctor />
            <span>Doctors</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Users">
            <ImUser />
            <span>Users</span>
          </StyledNavLink>
        </li>
      </NavList>
    </div>
  );
}

export default DoctorMainNav;
