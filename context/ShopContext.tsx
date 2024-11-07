import { createContext, useContext, useState } from "react";
import { product } from "../types";

interface ShopContextType {
  favourites: product[];
  cart: product[];
  addFavourite: (item: product) => void;
  removeFavourite: (item: product) => void;
  addToCart: (item: product) => void;
  removeFromCart: (item: product) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [favourites, setFavourites] = useState<product[]>([]);
  const [cart, setCart] = useState<product[]>([]);

  const addFavourite = (item: product) =>
    setFavourites((prev) => [...prev, item]);

  const removeFavourite = (item: product) =>
    setFavourites((prev) => prev.filter((fav) => fav !== item));

  const addToCart = (item: product) => setCart((prev) => [...prev, item]);

  const removeFromCart = (item: product) =>
    setCart((prev) => prev.filter((cartItem) => cartItem !== item));

  return (
    <ShopContext.Provider
      value={{
        favourites,
        cart,
        addFavourite,
        removeFavourite,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop debe usarse dentro de ShopProvider");
  }
  return context;
};
