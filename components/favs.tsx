import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import SingleProductSmallCard from "./singleProductSmallCard";

export default function Favs() {
  const { isFavoritesOpen, handleFavouriteOpen, favourites } = useShop();

  return (
    <Drawer
      isCartOpen={isFavoritesOpen}
      setIsCartOpen={handleFavouriteOpen}
      title={"Favourites"}
    >
      <div>
        {favourites.map((item) => (
          <SingleProductSmallCard key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
