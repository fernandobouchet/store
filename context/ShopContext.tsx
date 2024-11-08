import { createContext, useContext, useState } from "react";
import { product } from "../types";

interface ShopContextType {
  favourites: product[];
  cart: product[];
  addFavourite: (item: product) => void;
  removeFavourite: (item: product) => void;
  addToCart: (item: product) => void;
  removeFromCart: (item: product) => void;
  isFavoritesOpen: boolean;
  handleFavouriteOpen: () => void;
  isCartOpen: boolean;
  handleCartOpen: () => void;
  isMobileMenuOpen: boolean;
  handleMobileMenuOpen: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [favourites, setFavourites] = useState<product[]>([]);
  const [cart, setCart] = useState<product[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addFavourite = (item: product) =>
    setFavourites((prev) => [...prev, item]);

  const removeFavourite = (item: product) =>
    setFavourites((prev) => prev.filter((fav) => fav !== item));

  const addToCart = (item: product) => setCart((prev) => [...prev, item]);

  const removeFromCart = (item: product) =>
    setCart((prev) => prev.filter((cartItem) => cartItem !== item));

  const closeAllMenus = () => {
    setIsCartOpen(false);
    setIsFavoritesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleCartOpen = () => {
    closeAllMenus();
    setIsCartOpen(!isCartOpen);
  };

  const handleFavouriteOpen = () => {
    closeAllMenus();
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleMobileMenuOpen = () => {
    closeAllMenus();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ShopContext.Provider
      value={{
        favourites,
        cart,
        addFavourite,
        removeFavourite,
        addToCart,
        removeFromCart,
        isCartOpen,
        isFavoritesOpen,
        handleCartOpen,
        handleFavouriteOpen,
        isMobileMenuOpen,
        handleMobileMenuOpen,
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
