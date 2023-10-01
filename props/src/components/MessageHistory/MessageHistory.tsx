import Message from "./Message"
import './style.css';

interface IMessageHistory {
  list: {
    id: string
    from: {
      name: string
    }
    type:  TMessageType 
    time: string
    text?: string
  }[]
}

type TMessageType  = 'response' | 'message' | 'typing' | string;

function MessageHistory({list = []}: IMessageHistory) {
return <ul className="chat chat-history">
{
  list.map(item => {
    switch(item.type) {
      case 'message': {
        return <Message from={item.from} message={{time: item.time, text: item.text}} key={item.id} />
      }
      case 'response': {
         return ''
      }
      case 'typing': {
        return ''
      }
      default: {
         // return <Message from={item.from} message={item.text}  key={item.id} />
      }
    }
    
  })
}
</ul>
};

export default MessageHistory;