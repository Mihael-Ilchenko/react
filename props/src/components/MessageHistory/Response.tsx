interface IResponseProps {
  from: object
  message?: string
}

function Response({from, message}: IResponseProps) {
  return (
    <li className="clearfix">
      <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> Виктор</span>
      <span className="message-data-time">10:12</span>
    </div>
    <div className="message my-message">
      Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
    </div>
    </li>
  );
}


export default Response;