import React from "react";

const Bottles = ({ bottles, setBottles }) => {
  const handleBottlesChange = (e) => {
    setBottles(e.target.value);
  };
  const bottlesOptions = [...Array(30).keys()].map((index) => index + 1);

  return (
    <div className="input-container">
      <label name="input-container">Bottles:</label>
      <select
        id="bottlesSelect"
        onChange={handleBottlesChange}
        value={bottles || ""}
      >
        <option value="">Select amount of Bottles:</option>
        {bottlesOptions.map((bottles) => (
          <option key={bottles} value={bottles}>
            {bottles.toFixed()}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Bottles;
