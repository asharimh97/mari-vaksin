import useSWR from "swr";
import { Container } from "../components";

function StatsPage() {
  const data = useSWR("/api/swab");
  console.log(data);
  return (
    <Container>
      Ini halaman stats, disini kita bakal nampilin statistik kasus corona di
      semarang
    </Container>
  );
}

export default StatsPage;
