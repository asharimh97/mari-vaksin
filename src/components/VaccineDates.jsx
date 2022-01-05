import { any, arrayOf } from "prop-types";
import isToday from "date-fns/isToday";
import { Select } from "evergreen-ui";
import { useRouter } from "next/router";
import { useState } from "react";

function VaccineDates({ dates }) {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const handleSelectDate = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    router.push(`/?date=${date}`);
  };

  const renderDate = (date) => {
    const formatted = String(date).split("-").reverse().join("-");
    const today = isToday(new Date(formatted));

    if (today) {
      return "Hari ini";
    }

    return date;
  };

  if (dates.length === 0) return null;

  return (
    <Select value={selectedDate} onChange={handleSelectDate} height={25}>
      {dates?.map((date) => (
        <option key={date} value={date}>
          {renderDate(date)}
        </option>
      ))}
    </Select>
  );
}

VaccineDates.propTypes = {
  dates: arrayOf(any),
};

VaccineDates.defaultProps = {
  dates: [],
};

export default VaccineDates;
