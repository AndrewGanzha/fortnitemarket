import React from "react";
import { CartItem } from "./CartItem.jsx";

export const CartList = (props) => {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    addQuantity = Function.prototype,
    removeQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина:</li>
      {order.length ? (
        order.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={removeFromCart}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
            />
          );
        })
      ) : (
        <li href="#!" className="collection-item">
          Корзина пуста{" "}
        </li>
      )}
      <li href="#!" className="collection-item">
        Общая стоимость: {totalPrice} рублей
      </li>
      <i className="material-icons basket-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
};
