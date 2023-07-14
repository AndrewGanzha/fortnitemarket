export const GoodsItem = (props) => {
  const { mainId, displayName, displayDescription, displayAssets, price } =
    props;
  console.log();
  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].background} alt={displayName} />
        <span className="card-title">{displayName}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right">{price.regularPrice}</span>
      </div>
    </div>
  );
};
