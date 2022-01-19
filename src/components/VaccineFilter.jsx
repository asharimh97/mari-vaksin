import { Select } from "evergreen-ui";
import { arrayOf, any, func, string } from "prop-types";
import { useState, useEffect } from "react";

import { generateVaccineTypes } from "../utils/generator";

function VaccineFilter({ vaccineData, onSelectFilter, selectedFilter }) {
  const [vaccines, setVaccines] = useState([]);

  const generateFilter = (vaxData) => {
    const data = generateVaccineTypes(vaxData);
    setVaccines(data);
  };

  useEffect(() => {
    if (vaccineData) {
      generateFilter(vaccineData);
    }
  }, [vaccineData]);

  const handleChangeFilter = (e) => {
    const val = e.target.value;
    onSelectFilter(val);
  };

  if (vaccines.length === 0) return null;

  return (
    <Select
      value={selectedFilter}
      onChange={handleChangeFilter}
      height={25}
      marginRight={16}
    >
      <option value="">Semua jenis</option>
      {vaccines.map((vax) => (
        <option key={vax} value={vax}>
          {vax}
        </option>
      ))}
    </Select>
  );
}

VaccineFilter.propTypes = {
  vaccineData: arrayOf(any),
  onSelectFilter: func,
  selectedFilter: string,
};

export default VaccineFilter;
