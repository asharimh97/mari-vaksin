import useSWR from "swr";

function useVaccines(date) {
  const params = date ? `?date=${date}` : "";
  const { data, error } = useSWR(`/api/collect${params}`);

  return { data, error };
}

export default useVaccines;
