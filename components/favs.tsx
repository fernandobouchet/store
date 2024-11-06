import { Dispatch, SetStateAction } from "react";
import Drawer from "./ui/drawer";

interface Props {
  isFavOpen: boolean;
  setIsFavOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children?: React.ReactNode;
}

export default function Favs({
  isFavOpen,
  setIsFavOpen,
  title,
  children,
}: Props) {
  return (
    <Drawer isCartOpen={isFavOpen} setIsCartOpen={setIsFavOpen} title={title} />
  );
}
