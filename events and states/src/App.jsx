import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import Portfolio from "./components/Portfolio/Portfolio";
import Store from "./components/Store/Store";
import { listItems, portfolioList, products } from "./exampleData";

function App() {

  const btnExample = "account settings";

  return (
    <div className="App">
      <Store products={products} />
      <Dropdown button={btnExample} arr={listItems} />
    <Portfolio filters={["All", "Websites", "Flayers", "Business Cards"]} selected={'Flayers'} portfolioList={portfolioList} />
    </div>
  );
}

export default App;
