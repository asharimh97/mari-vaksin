import { Button, Pane } from "evergreen-ui";
import { arrayOf, any, func } from "prop-types";
import { useState, useEffect } from "react";

import { generateVaccineTypes } from "../utils/generator";

function VaccineFilter({ vaccineData, onSelectFilter }) {
  const [vaccines, setVaccines] = useState([]);

  const generateFilter = (vaxData) => {
    const data = generateVaccineTypes(vaxData);
    data.unshift("Semua jenis");
    setVaccines(data);
  };

  useEffect(() => {
    if (vaccineData) {
      generateFilter(vaccineData);
    }
  }, [vaccineData]);

  const handleClick = (vax) => {
    onSelectFilter(vax);
  };

  if (vaccines.length === 0) return null;

  return (
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
  );
}

VaccineFilter.propTypes = {
  vaccineData: arrayOf(any),
  onSelectFilter: func,
};

export default VaccineFilter;
