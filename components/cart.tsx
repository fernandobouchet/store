import { Dispatch, SetStateAction } from "react";
import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

export default function Cart({ isCartOpen, setIsCartOpen, title }: Props) {
  const { cart } = useShop();

  return (
    <Drawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} title={title}>
      <div>
        {cart.map((item) => (
          <p key={item.id}>{item.titulo}</p>
        ))}
      </div>
    </Drawer>
  );
}
