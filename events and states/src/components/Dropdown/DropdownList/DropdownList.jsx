import generateRandomStr from "../../../utils/generateRandomString";

function DropdownList({ list }) {
  function classToggle(e, className) {
    e.target.classList.toggle(className);
  }
  return (
    <ul data-id="dropdown" className="dropdown list-reset">
      {list.map((item) => {
        return (
          <li
            key={generateRandomStr()}
            onClick={(e) => classToggle(e, "active")}
          >
            <a href={item.href} onClick={(e) => e.preventDefault()}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownList;
