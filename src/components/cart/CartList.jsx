import React from "react";
import { CartItem } from "./CartItem.jsx";

export const CartList = (props) => {
  const { order } = props;
  return (
    <div className="collection">
      <li className="collection-item active">Корзина:</li>
      {order.length ? (
        order.map((item) => {
          <CartItem key={item.id} {...item} />;
        })
      ) : (
        <li href="#!" className="collection-item">
          Корзина пуста{" "}
        </li>
      )}
      <li href="#!" className="collection-item">
        Общая стоимость:
      </li>
    </div>
  );
};
