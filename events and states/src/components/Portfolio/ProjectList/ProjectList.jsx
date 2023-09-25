import React from "react";
import generateRandomStr from "../../../utils/generateRandomString";
import "./style.css";

function ProjectList({ list }) {
  return (
    <ul className="some list-reset">
      {list.map((item) => {
        return (
          <li className="some__item" key={generateRandomStr()}>
            <img src={item.img} alt={item.descr ? item.descr : "Изображение"} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectList;
