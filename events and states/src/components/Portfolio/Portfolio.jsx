import "./style.css";
import Toolbar from "./Toolbar/Toolbar";
import ProjectList from "./ProjectList/ProjectList";
import { useEffect, useState } from "react";

function Portfolio({ filters, selected, portfolioList }) {
  const [selectedValue, setSelected] = useState(selected);
  const [list, setList] = useState(filterListPortfolio(portfolioList));

  useEffect(() => {
    setList(filterListPortfolio(portfolioList));
  }, [selectedValue]);

  function filterListPortfolio(arr) {
    if (selectedValue === "All") {
      return portfolioList;
    } else {
      let newArr = arr.filter((it) => it.category === selectedValue);
      return newArr;
    }
  }

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selectedValue}
        onSelectFilter={setSelected}
      />
      <ProjectList list={list} />
    </div>
  );
}

export default Portfolio;
