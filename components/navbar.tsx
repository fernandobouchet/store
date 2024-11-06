import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { MdFavorite } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import { useState } from "react";
import Cart from "./cart";
import Favs from "./favs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const path = usePathname();

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Laptop", href: "/laptop" },
    { title: "pc", href: "/pc" },
    { title: "Log Out" },
  ];

  return (
    <Nav
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      className="[&_header]:max-w-none bg-inherit"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit text-2xl lg:text-3xl">
              TechStore
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={path.startsWith("/laptop")}>
          <Link href="/laptop" aria-current="page" className="text-xl ">
            Laptops
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.startsWith("/pc")}>
          <Link href="/pc" aria-current="page" className="text-xl">
            PC&apos;s
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="flex gap-0">
        <NavbarItem className="hidden lg:flex w-fit">
          <Button
            color="primary"
            variant="light"
            className="min-w-fit px-2"
            onClick={() => setIsFavOpen(!isFavOpen)}
          >
            <MdFavorite className="h-6 w-6" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="light"
            className="min-w-fit px-2"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <IoCart className="h-6 w-6" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        title="Cart"
      />
      <Favs isFavOpen={isFavOpen} setIsFavOpen={setIsFavOpen} title="Favs" />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={
                path === item.href
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
