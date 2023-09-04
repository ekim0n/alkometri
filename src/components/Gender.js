import React from "react";

const Gender = ({ gender, setGender }) => {
  return (
    <div className="radio-group">
      <p>Gender:</p>

      <input
        type="radio"
        name="gender"
        value="male"
        defaultChecked
        onChange={() => setGender("male")}
      />
      <label>Male</label>

      <input
        type="radio"
        name="gender"
        value="female"
        onChange={() => setGender("female")}
      />
      <label>Female</label>
    </div>
  );
};
export default Gender;
