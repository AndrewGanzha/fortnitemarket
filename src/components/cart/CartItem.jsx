import React from "react";

export const CartItem = (props) => {
  const { mainId, displayName, price, quantity } = props;

  console.log(props);

  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price}
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
