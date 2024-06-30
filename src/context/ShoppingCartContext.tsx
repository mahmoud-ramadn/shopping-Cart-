import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";
import useLocalStorage from "../hooks/useLocalStorag";
type CartItems = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  toggeld: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItems[];
};



const ShoppingCartContext = createContext({} as ShoppingCartContext);
const UseShopingCart = () => {
  return useContext(ShoppingCartContext);
};

export default UseShopingCart;
export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartImes] =useLocalStorage<CartItems[]>("shopping-cart",[]);
  const [OpenCart, setOpenCart] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const toggeld = () => {
    setOpenCart(!OpenCart);
  };

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartImes((currentItem) => {
      if (currentItem.find((it) => it.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartImes((currentItem) => {
      if (currentItem.find((it) => it.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartImes((currentItem) => {
      return currentItem.filter((it) => it.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        toggeld,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={OpenCart} />
    </ShoppingCartContext.Provider>
  );
}
