import { Pane, Text } from "evergreen-ui";
import { useEffect, useState } from "react";
import { format, isToday } from "date-fns";
import { id } from "date-fns/locale";
import { useRouter } from "next/router";

import { SEO, VaccineCard, VaccineFilter, Container } from "../components";
import VaccineDates from "../components/VaccineDates";
import useVaccines from "../hooks/useVaccines";

export default function Home() {
  const router = useRouter();
  const { date } = router.query;

  const { data, error } = useVaccines(date);

  const [list, setList] = useState(null);
  const [selectedVaccine, setSelectedVaccine] = useState("");

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (selectedVaccine === "" || selectedVaccine === "Semua jenis") {
        setList(data);
      } else {
        const filteredList = data.data.filter(
          (item) => item.vaccine === selectedVaccine
        );
        setList((prevState) => ({
          ...prevState,
          data: filteredList,
        }));
      }
    }
  }, [selectedVaccine, data]);

  const renderDate = () => {
    let dateContent = "Jadwal hari ini";
    if (data?.date) {
      const newDate = String(data.date).split("-").reverse().join("-");
      const parsedDate = new Date(newDate);

      const today = isToday(parsedDate);

      if (!today) {
        const date = format(parsedDate, "EEEE, d MMMM yyyy", {
          locale: id,
        });
        dateContent = `Jadwal untuk ${date}`;
      }
    }

    return <Text color="gray700">{dateContent}</Text>;
  };

  // Event handler
  const handleClickFilter = (vax) => {
    setSelectedVaccine(vax);
  };

  const renderContent = () => {
    if (error) {
      return <Text>An Error occurred!</Text>;
    }

    if (!list) {
      return <Text>Loading data...</Text>;
    }

    return list.data
      .sort(
        (a, b) =>
          Number(a.filled) / Number(a.capacity) -
          Number(b.filled) / Number(b.capacity)
      )
      .map((item, idx) => {
        return <VaccineCard key={idx} item={item} />;
      });
  };

  return (
    <>
      <SEO />
      <Container>
        <Pane marginBottom="16px" display="flex" flexDirection="column">
          <Text fontSize="32px" as="h1" marginBottom="16px" fontWeight="bold">
            💉 Mari{" "}
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
        <Pane marginBottom="32px">
          <VaccineFilter
            vaccineData={data?.data}
            onSelectFilter={handleClickFilter}
            selectedFilter={selectedVaccine}
          />
          <VaccineDates dates={data?.available_dates} />
        </Pane>
        {renderContent()}
        <Text as="h1" marginY="16px" color="gray600">
          Vaccine data from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://victori.semarangkota.go.id/"
          >
            Victori Kota Semarang
          </a>
        </Text>
      </Container>
    </>
  );
}
