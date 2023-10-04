import { createContext, useContext, useReducer } from "react";

import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
faker.seed(10);

const Context = ({ children }) => {
  const inStock = [0, 3, 5, 6, 7];
  const ratings = [1, 2, 3, 4, 5];

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: inStock[Math.floor(Math.random() * inStock.length)],
    fastDelivery: faker.datatype.boolean(),
    ratings: ratings[Math.floor(Math.random() * ratings.length)],
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
