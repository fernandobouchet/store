import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import SingleProductSmallCard from "./singleProductSmallCard";
import { useTranslation } from "next-i18next";

export default function Cart() {
  const { isCartOpen, handleCartOpen, cart } = useShop();
  const { t } = useTranslation("common");

  return (
    <Drawer
      isCartOpen={isCartOpen}
      setIsCartOpen={handleCartOpen}
      title={t("cart.title")}
    >
      <div>
        {cart.map((item) => (
          <SingleProductSmallCard key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
