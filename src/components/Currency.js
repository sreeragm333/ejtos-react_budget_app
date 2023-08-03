import React, { useState } from 'react';
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const Dropdown = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onChange(selectedOption);
  };

  return (
    <select value={selectedValue} onChange={handleDropdownChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
