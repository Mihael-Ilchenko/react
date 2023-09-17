import "./style.css";

function Calendar({ date }) {
  const arrDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const arrMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const arrDate = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const classActiveDay = "ui-datepicker-today";
  const targetDate = date.getDate();

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function changeNameMonth(month) {
    switch (month) {
      case "Сентябрь" ||
        "Январь" ||
        "Февраль" ||
        "Апрель" ||
        "Май" ||
        "Июнь" ||
        "Июль" ||
        "Октябрь" ||
        "Ноябрь" ||
        "Декабрь": {
        return month.substring(0, month.length - 1) + "я";
      }
      case "Март" || "Август": {
        return month.substring(0, month.length - 1) + "а";
      }
      default: {
        return month;
      }
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {arrDays[date.getDay()]}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">
            {changeNameMonth(arrMonth[date.getMonth()])}
          </div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {arrMonth[date.getMonth()]}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">
              {daysInMonth(date.getMonth() - 1, date.getFullYear()) - 1}
            </td>
            <td className="ui-datepicker-other-month">
              {daysInMonth(date.getMonth() - 1, date.getFullYear())}
            </td>
            <td className={arrDate[0] === targetDate ? classActiveDay : ""}>
              {arrDate[0]}
            </td>
            <td className={arrDate[1] === targetDate ? classActiveDay : ""}>
              {arrDate[1]}
            </td>
            <td className={arrDate[2] === targetDate ? classActiveDay : ""}>
              {arrDate[2]}
            </td>
            <td className={arrDate[3] === targetDate ? classActiveDay : ""}>
              {arrDate[3]}
            </td>
            <td className={arrDate[4] === targetDate ? classActiveDay : ""}>
              {arrDate[4]}
            </td>
          </tr>
          <tr>
            <td className={arrDate[5] === targetDate ? classActiveDay : ""}>
              {arrDate[5]}
            </td>
            <td className={arrDate[6] === targetDate ? classActiveDay : ""}>
              {arrDate[6]}
            </td>
            <td className={arrDate[7] === targetDate ? classActiveDay : ""}>
              {arrDate[7]}
            </td>
            <td className={arrDate[8] === targetDate ? classActiveDay : ""}>
              {arrDate[8]}
            </td>
            <td className={arrDate[9] === targetDate ? classActiveDay : ""}>
              {arrDate[9]}
            </td>
            <td className={arrDate[10] === targetDate ? classActiveDay : ""}>
              {arrDate[10]}
            </td>
            <td className={arrDate[11] === targetDate ? classActiveDay : ""}>
              {arrDate[11]}
            </td>
          </tr>
          <tr>
            <td className={arrDate[12] === targetDate ? classActiveDay : ""}>
              {arrDate[12]}
            </td>
            <td className={arrDate[13] === targetDate ? classActiveDay : ""}>
              {arrDate[13]}
            </td>
            <td className={arrDate[14] === targetDate ? classActiveDay : ""}>
              {arrDate[14]}
            </td>
            <td className={arrDate[15] === targetDate ? classActiveDay : ""}>
              {arrDate[15]}
            </td>
            <td className={arrDate[16] === targetDate ? classActiveDay : ""}>
              {arrDate[16]}
            </td>
            <td className={arrDate[17] === targetDate ? classActiveDay : ""}>
              {arrDate[17]}
            </td>
            <td className={arrDate[18] === targetDate ? classActiveDay : ""}>
              {arrDate[18]}
            </td>
          </tr>
          <tr>
            <td className={arrDate[19] === targetDate ? classActiveDay : ""}>
              {arrDate[19]}
            </td>
            <td className={arrDate[20] === targetDate ? classActiveDay : ""}>
              {arrDate[20]}
            </td>
            <td className={arrDate[21] === targetDate ? classActiveDay : ""}>
              {arrDate[21]}
            </td>
            <td className={arrDate[22] === targetDate ? classActiveDay : ""}>
              {arrDate[22]}
            </td>
            <td className={arrDate[23] === targetDate ? classActiveDay : ""}>
              {arrDate[23]}
            </td>
            <td className={arrDate[24] === targetDate ? classActiveDay : ""}>
              {arrDate[24]}
            </td>
            <td className={arrDate[25] === targetDate ? classActiveDay : ""}>
              {arrDate[25]}
            </td>
          </tr>
          <tr>
            <td className={arrDate[26] === targetDate ? classActiveDay : ""}>
              {arrDate[26]}
            </td>
            <td className={arrDate[27] === targetDate ? classActiveDay : ""}>
              {arrDate[27]}
            </td>
            <td className={arrDate[28] === targetDate ? classActiveDay : ""}>
              {arrDate[28]}
            </td>
            <td className={arrDate[29] === targetDate ? classActiveDay : ""}>
              {arrDate[29]}
            </td>
            <td className={arrDate[30] === targetDate ? classActiveDay : ""}>
              {arrDate[30]}
            </td>
            <td className="ui-datepicker-other-month">1</td>
            <td className="ui-datepicker-other-month">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
