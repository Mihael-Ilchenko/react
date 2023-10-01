import "./style.css";

interface IListingProps {
  items?: {
    listing_id: number;
    url?: string;
    MainImage?: {
      url_570xN: string;
    };
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
  }[];
}

function Listing({ items = [] }: IListingProps) {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {String(item.title).length > 50
                  ? item.title?.slice(0, 50) + "..."
                  : item.title}
              </p>
              <p className="item-price">
                {changingTheCurrencyWithdrawal(String(item.currency_code), String(item.price))}
              </p>
              <p
                className={`item-quantity  ${classDependencesCountQuantity(
                  Number(item.quantity)
                )}`}
              >
                {item.quantity + ' left'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
function changingTheCurrencyWithdrawal(code: string, price: string): string {
  switch (code) {
    case "USD": {
      return `$${price}`;
    }
    case "EUR": {
      return `€${price}`;
    }
    default: {
      return `${price} GBP`
    }
  }
}

function classDependencesCountQuantity(count: number): string {
  if (count <= 10) {
    return "level-low";
  }
  if (count <= 20) {
    return "level-medium";
  }
  if (count > 20) {
    return "level-high";
  }
  return "";
}

export default Listing;
