import { useState } from "react";
import DropdownList from "./DropdownList/DropdownList";
import "./style.css";

function Dropdown({ button, arr }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`} data-id="wrapper">
      <button
        className="btn btn-reset"
        data-id="toggle"
        onClick={() => setOpen(!isOpen)}
      >
        <span> {button}</span>
        <i className="material-icons">public</i>
      </button>
      {isOpen && <DropdownList list={arr} />}
    </div>
  );
}

export default Dropdown;
