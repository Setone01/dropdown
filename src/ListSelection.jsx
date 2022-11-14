import React, { useState } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

const ListSelection = ({
  options,
  placeholder = "",
  onChange,
  selectedKey,
  open,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState("");
 
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onItemSelected = (option) => {
    onChange !== undefined && onChange(options.key);
    onChange !== undefined && setInputValue(options.value)
    setOpen(false)
  }

  const clearDropdown = () => {
    setInputValue("");
    onChange("");
  };

  const onInputClick = () => {
    setOpen((prevValue) => !prevValue);
  }

  return (
    <div className="formContainer">
      <h3>Country</h3>
      <form className="registrationForm" >
        <input
          className="inputField"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={onInputChange} 
          onClick={onInputClick}
        />
        <div className="selectIcon">
          <AiOutlineDown />
        </div>
        { selectedKey || inputValue ? <div onClick={clearDropdown} className="clearInput">
          <AiOutlineClose />
        </div>: null }

        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options.map((opt) => {
            return <div className="dropList" key={opt.key} onClick={() => onItemSelected(opt)}>
              {opt.value}
              </div>
          })}
        </div>
      </form>
      <button type="submit" className="btn">
          Submit
        </button>
    </div>
  );
};

export default ListSelection;
