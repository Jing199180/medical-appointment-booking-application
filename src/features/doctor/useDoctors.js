import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../services/apiDoctors";

export function useDoctors() {
  const {
    isLoading,
    data: doctors,
    error,
  } = useQuery({
    queryKey: ["Doctors"],
    queryFn: getDoctors,
  });
  console.log(doctors);
  return { isLoading, doctors, error };
}
