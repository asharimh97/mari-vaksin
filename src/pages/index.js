import { Pane, Text } from "evergreen-ui";
import useSWR from "swr";
import { SEO, VaccineCard } from "../components";
import format from "date-fns/format";
import { id } from "date-fns/locale";

export default function Home() {
  const { data } = useSWR("/api/collect");

  const renderDate = () => {
    if (data.date) {
      const newDate = String(data.date).split("-").reverse().join("-");
      const date = format(new Date(newDate), "EEEE, d MMMM yyyy", {
        locale: id,
      });

      return <Text color="gray700">Jadwal terdekat: {date}</Text>;
    }

    return <Text color="gray700">Jadwal hari ini</Text>;
  };

  if (!data) {
    return <div />;
  }

  return (
    <>
      <SEO />
      <Pane
        display="flex"
        flexDirection="column"
        margin="auto"
        padding="32px"
        width="750px"
      >
        <Pane marginBottom="32px" display="flex" flexDirection="column">
          <Text fontSize="32px" as="h1" marginBottom="16px" fontWeight="bold">
            Mari{" "}
            <Text
              color="blue400"
              as="span"
              fontSize="inherit"
              fontWeight="inherit"
            >
              Vaksin!
            </Text>
          </Text>
          {renderDate()}
        </Pane>
        {data.data.map((item, idx) => {
          return <VaccineCard key={idx} item={item} />;
        })}
      </Pane>
    </>
  );
}
