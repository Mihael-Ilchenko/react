import Stars from "../Stars/Stars";
import dataListing from "../../data/data.json";
import dataMessages from "../../data/dataMessage";
import "./App.css";
import Listing from "../Listing/Listing";
import MessageHistory from "../MessageHistory/MessageHistory";

function App() {
 
  const countStars: number = 5;
  return (
    <div className="App">
      {countStars > 0 && countStars <= 5 && <Stars count={countStars} />}
      {dataMessages.length !== 0 && <MessageHistory list={dataMessages} />}
      <Listing items={dataListing} />
    </div>
  );
}
export default App;
