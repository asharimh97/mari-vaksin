import { Pane, Text } from "evergreen-ui";
import { useEffect, useState } from "react";
import useSWR from "swr";
import format from "date-fns/format";
import { id } from "date-fns/locale";

import { SEO, VaccineCard, VaccineFilter } from "../components";

export default function Home() {
  const { data } = useSWR("/api/collect");

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
    if (data?.date) {
      const newDate = String(data.date).split("-").reverse().join("-");
      const date = format(new Date(newDate), "EEEE, d MMMM yyyy", {
        locale: id,
      });

      return <Text color="gray700">Jadwal terdekat: {date}</Text>;
    }

    return <Text color="gray700">Jadwal hari ini</Text>;
  };

  // Event handler
  const handleClickFilter = (vax) => {
    setSelectedVaccine(vax);
  };

  const renderContent = () => {
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
      <Pane
        display="flex"
        flexDirection="column"
        margin="auto"
        padding="32px"
        width="750px"
      >
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
        <VaccineFilter
          vaccineData={data?.data}
          onSelectFilter={handleClickFilter}
          selectedFilter={selectedVaccine}
        />
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
      </Pane>
    </>
  );
}
