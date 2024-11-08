import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import SingleProductSmallCard from "./singleProductSmallCard";

export default function Cart() {
  const { isCartOpen, handleCartOpen, cart } = useShop();

  return (
    <Drawer
      isCartOpen={isCartOpen}
      setIsCartOpen={handleCartOpen}
      title={"Cart"}
    >
      <div>
        {cart.map((item) => (
          <SingleProductSmallCard key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
