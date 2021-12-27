import { Button, Pane, Text } from "evergreen-ui";
import useSWR from "swr";
import { SEO, VaccineCard } from "../components";
import format from "date-fns/format";
import { id } from "date-fns/locale";
import { generateVaccineTypes } from "../utils/generator";
import { useEffect, useState } from "react";

export default function Home() {
  const { data } = useSWR("/api/collect");

  const [list, setList] = useState(null);
  const [vaccines, setVaccines] = useState([]);
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

  const generateFilter = (vaxData) => {
    const data = generateVaccineTypes(vaxData);
    data.unshift("Semua jenis");
    setVaccines(data);
  };

  useEffect(() => {
    if (data) {
      generateFilter(data.data);
    }
  }, [data]);

  // Event handler
  const handleClick = (vax) => {
    setSelectedVaccine(vax);
  };

  const renderContent = () => {
    if (!list) {
      return <div />;
    }

    return list.data.map((item, idx) => {
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
        {vaccines.length > 0 && (
          <Pane marginBottom="32px">
            {vaccines.map((vax) => (
              <Button
                key={vax}
                marginRight={12}
                size="small"
                onClick={() => handleClick(vax)}
              >
                {vax}
              </Button>
            ))}
          </Pane>
        )}
        {renderContent()}
      </Pane>
    </>
  );
}
