import React, { useState } from "react";

const Filter = ({ handleFilter }) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "rate") {
      setRate(value);
    }
    handleFilter({ title, rate });
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Search by title"
      />
      <input
        type="text"
        name="rate"
        value={rate}
        onChange={handleChange}
        placeholder="Filter by rating"
      />
    </div>
  );
};

export default Filter;
