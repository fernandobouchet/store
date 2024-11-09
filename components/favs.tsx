import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import SingleProductSmallCard from "./singleProductSmallCard";
import { useTranslation } from "next-i18next";

export default function Favs() {
  const { isFavoritesOpen, handleFavouriteOpen, favourites } = useShop();
  const { t } = useTranslation("common");

  return (
    <Drawer
      isCartOpen={isFavoritesOpen}
      setIsCartOpen={handleFavouriteOpen}
      title={t("favourite.title")}
    >
      <div>
        {favourites.map((item) => (
          <SingleProductSmallCard key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
