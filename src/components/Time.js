import React from "react";

const Time = ({ hours, setHours }) => {
  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };
  const hoursOptions = [...Array(24).keys()].map((index) => index + 1);

  return (
    <div className="input-container">
      <label name="hoursSelect">Time Since First Drink:</label>
      <select id="hoursSelect" onChange={handleHoursChange} value={hours || ""}>
        <option value="">Select amount of Hours:</option>
        {hoursOptions.map((hours) => (
          <option key={hours} value={hours}>
            {hours.toFixed()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Time;
