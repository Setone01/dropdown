import React, { useState } from 'react'
import ListSelection from './ListSelection';


const options = [
  { key: 1, value: "Nigeria"},
  { key: 2, value: "Ghana"},
  { key: 3, value: "England"},
  { key: 4, value: "Canada"},
  { key: 5, value: "Tokyo"},
  { key: 6, value: "Netherland"}
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="dropdownContainer">
      <ListSelection
            options={options}
            placeholder={"Select Country"}
            onChange={(item) => setSelectedOption(item)}
            selectedKey={selectedOption}
      />
    </div>
  );
}

export default Dropdown