import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true }); //替換掉當前的歷史紀錄，而不是新增一個紀錄，這樣點擊瀏覽器後退時，不會回到替換前的頁面
    },
  });

  return { logout, isLoading };
}
