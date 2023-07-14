import React from "react";

export const CartItem = (props) => {
  const { mainId, displayName, price, quantity } = props;

  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price}
      <span href="#!" className="secondary-content">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};
