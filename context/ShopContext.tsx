import { createContext, useContext, useEffect, useState } from "react";
import { product } from "../types";

interface ShopContextType {
  favorites: product[];
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
  updateQuantity: (id: number, newQuantity: number) => void;
  getCartTotal: () => number;
  findProductInCart: (product: product) => product | null;
  findProductInFavs: (product: product) => product | null;
  removeCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [cart, setCart] = useState<product[]>([]);
  const [favorites, setFavorites] = useState<product[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("cart");
    const storedFavorites = localStorage.getItem("favorites");
    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isMounted]);

  const addFavourite = (item: product) =>
    setFavorites((prev) => [...prev, item]);

  const removeFavourite = (item: product) =>
    setFavorites((prev) => prev.filter((fav) => fav !== item));

  const addToCart = (item: product) => {
    setCart((prev) => [...prev, { ...item, cantidad: 1 }]);
  };

  const removeFromCart = (item: product) =>
    setCart((prev) => prev.filter((cartItem) => cartItem !== item));

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const getCartTotal = () =>
    cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const findProductInCart = (product: product) =>
    cart.find((item) => item.id === product.id) ? product : null;

  const findProductInFavs = (product: product) =>
    favorites.find((item) => item.id === product.id) ? product : null;

  const removeCart = () => {
    setCart([]);
  };

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

  if (!isMounted) return null;

  return (
    <ShopContext.Provider
      value={{
        favorites,
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
        updateQuantity,
        getCartTotal,
        findProductInCart,
        findProductInFavs,
        removeCart,
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
