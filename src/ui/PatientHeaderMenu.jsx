import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { ImExit } from "react-icons/im";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

function PatientHeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/login")}>
          <ImExit />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default PatientHeaderMenu;
