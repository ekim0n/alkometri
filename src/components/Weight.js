import React from "react";

const Weight = ({ weight, setWeight }) => {
  return (
    <div className="weight-container">
      <label>Weight:</label>
      <input
        name="weight"
        type="number"
        step="1"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
    </div>
  );
};
export default Weight;
