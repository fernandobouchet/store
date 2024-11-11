import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "next-i18next";
import SingleProductSmallCardFav from "./singleProductSmallCardFav";

export default function Favs() {
  const { isFavoritesOpen, handleFavouriteOpen, favorites } = useShop();
  const { t } = useTranslation("common");

  return (
    <Drawer
      isCartOpen={isFavoritesOpen}
      setIsCartOpen={handleFavouriteOpen}
      title={t("favourite.title")}
    >
      <div>
        {favorites.map((item) => (
          <SingleProductSmallCardFav key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
