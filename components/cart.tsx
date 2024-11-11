import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "next-i18next";
import { Button } from "@nextui-org/react";
import SingleProductSmallCardCart from "./singleProductSmallCardCart";

export default function Cart() {
  const { isCartOpen, handleCartOpen, cart, getCartTotal, removeCart } =
    useShop();
  const { t } = useTranslation("common");

  let total = getCartTotal();

  return (
    <Drawer
      isCartOpen={isCartOpen}
      setIsCartOpen={handleCartOpen}
      title={t("cart.title")}
    >
      <div>
        <div className="flex flex-col gap-2">
          {cart.map((item) => (
            <SingleProductSmallCardCart key={item.id} product={item} />
          ))}
        </div>
        {total >= 1 && (
          <div className="mt-8 flex flex-col items-end">
            <p className="text-xl font-semibold mb-4">
              Total:{" "}
              <span className="text-[#006fee]">${total.toLocaleString()}</span>
            </p>
            <div className="space-x-4">
              <Button
                color="primary"
                onPress={removeCart}
                className="bg-[#006fee] text-white"
              >
                {t("cart.button")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
}
