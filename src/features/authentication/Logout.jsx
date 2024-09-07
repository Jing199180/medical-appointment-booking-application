import { useLogout } from "./useLogout";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { ImExit } from "react-icons/im";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={() => logout()} disabled={isLoading}>
      {!isLoading ? <ImExit /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
export default Logout;
