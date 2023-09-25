import generateRandomStr from "../../../utils/generateRandomString";
import ShopCard from "../ShopCard/ShopCard";

function CardsView({ cards, view }) {
  return (
    <ul
      className={` ${
        view === "view_module" ? "store__list-module" : "store__list-list"
      } list-reset`}
    >
      {cards.map((card) => {
        return <ShopCard key={generateRandomStr(3)} card={card} As="li" />;
      })}
    </ul>
  );
}

export default CardsView;
