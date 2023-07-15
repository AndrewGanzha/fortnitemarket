import React from "react";

export const CartItem = (props) => {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromCart,
    addQuantity,
    removeQuantity,
  } = props;

  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price * quantity} рублей
      <span href="#!" className="secondary-content">
        <i
          className="material-icons basket-add"
          onClick={() => addQuantity(mainId)}
        >
          add
        </i>
        <i
          className="material-icons basket-remove"
          onClick={() => removeQuantity(mainId)}
        >
          remove
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromCart(mainId)}
        >
          close
        </i>
      </span>
    </li>
  );
};
