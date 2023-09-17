import React from "react";
import "./style.css";

class ShopItemClass extends React.Component {
  constructor(item) {
    super(item);
    this.item = item.item;
    this.brand = this.item.brand;
    this.title = this.item.title;
    this.description = this.item.description;
    this.descriptionFull = this.item.descriptionFull;
    this.currency = this.item.currency;
    this.price = this.item.price;
  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div className="description">{this.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.currency + this.price + ".00"}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;
