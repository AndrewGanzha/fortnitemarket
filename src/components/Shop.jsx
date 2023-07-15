import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./cart/Cart";
import { CartList } from "./cart/CartList";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);

  const addToCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const addQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const removeQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  useEffect(function getGoods() {
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then(function (response) {
        JSON.stringify(response.data.shop);
        response && setGoods(response.data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      )}
    </main>
  );
};
