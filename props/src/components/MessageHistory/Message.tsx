interface IMessageProps {
  from: {
    name: string
  }
  message: {
    time: any
    text?: string
  }
}

function Message({from, message}: IMessageProps) {
  const {time} = message
 console.log(message)
  return (
    <li >
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


export default Message;