import { useState } from "react";
import CardsView from "./CardsView/CardsView";
import IconSwitch from "./IconSwitch/IconSwitch";
import "./style.css";

function Store({ products }) {
  const [view, setView] = useState("view_module");

  return (
    <div className="store">
      <IconSwitch icon={view} onSwitch={setView} />
      <CardsView cards={products} view={view} />
    </div>
  );
}

export default Store;
