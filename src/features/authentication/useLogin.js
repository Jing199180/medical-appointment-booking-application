import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      // console.log(user);
      navigate("/doctor-dashboard", { replace: true });
      navigate(0);
    },
    onError: () => {
      // console.log(err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
