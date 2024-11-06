import { Dispatch, SetStateAction } from "react";
import Drawer from "./ui/drawer";

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children?: React.ReactNode;
}

export default function Cart({
  isCartOpen,
  setIsCartOpen,
  title,
  children,
}: Props) {
  return (
    <Drawer
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      title={title}
    />
  );
}
