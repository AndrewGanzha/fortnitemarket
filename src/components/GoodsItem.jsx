export const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets,
    price,
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].background} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              mainId,
              displayName,
              price: price.regularPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right">{price.regularPrice} рублей</span>
      </div>
    </div>
  );
};
