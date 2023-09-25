function ShopCard({card, As = 'div'}) {
 
  return (
    <As className='card'>
      <p className="card__title">{card.name}</p>
      <span className="card__color">{card.color}</span>
      <img className="card__img" src={card.img} alt={card.name} />
      <div className="card__bottom">
        <span className="card__price">{`$${card.price}`}</span>
        <button className="card__btn btn-reset">Add to cart</button>
      </div>
    </As>
  )
}

export default ShopCard;
