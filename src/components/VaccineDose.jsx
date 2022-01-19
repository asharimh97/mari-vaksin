/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import {} from "prop-types";
import { Select } from "evergreen-ui";

function VaccineDose({ vaccineData, selectedDose, onSelectDose }) {
  const [doses, setDoses] = useState([]);

  const generateDoseOptions = (data) => {
    const mappedDose = data.map((vax) => vax.dose).sort((a, b) => a - b);
    return Array.from(new Set(mappedDose));
  };

  useEffect(() => {
    if (vaccineData) {
      const dosis = generateDoseOptions(vaccineData);
      setDoses(dosis);
    }
  }, [vaccineData]);

  const handleSelectDose = (e) => {
    const dose = e.target.value;
    onSelectDose(dose);
  };

  if (doses.length === 0) return null;

  return (
    <Select
      value={selectedDose}
      onChange={handleSelectDose}
      height={25}
      marginRight={16}
    >
      <option value="">Semua</option>
      {doses.map((dose) => (
        <option key={dose} value={dose}>
          {dose}
        </option>
      ))}
    </Select>
  );
}

export default VaccineDose;
