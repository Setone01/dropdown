import React, { useState } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import clickOutside from "./clickOutside";

const ListSelection = React.forwardRef(({
  options,
  placeholder = "",
  onChange,
  selectedKey,
  open,
  setOpen,
}  , ref) => {
  const [inputValue, setInputValue] = useState("");
 
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option.key);
    onChange !== undefined && setInputValue(option.value)
    setOpen(false)
  }

  const clearDropdown = () => {
    setInputValue("");
    onChange("");
  };

  const onInputClick = () => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <div className="formContainer" ref={ref}>
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
          <AiOutlineDown className="selectPin" />
        </div>
        { selectedKey || inputValue ? <div onClick={clearDropdown} className="clearInput">
          <AiOutlineClose />
        </div>: null }

        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options

          // to filter through every option
          .filter((item) => {
            const searchItem =inputValue.toLocaleLowerCase();
            const show = item.value.toLocaleLowerCase();

            if (!searchItem) return true;

            return show.startsWith(searchItem);
          }).map((opt) => {
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
});

export default clickOutside(ListSelection);
