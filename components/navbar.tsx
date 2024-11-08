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
  Badge,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { MdFavorite } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const {
    handleCartOpen,
    handleFavouriteOpen,
    isMobileMenuOpen,
    handleMobileMenuOpen,
    favourites,
    cart,
  } = useShop();

  const path = usePathname();

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Laptop", href: "/laptop" },
    { title: "Pc", href: "/pc" },
  ];

  return (
    <Nav
      onMenuOpenChange={handleMobileMenuOpen}
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
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
      <NavbarContent
        justify="end"
        className={`gap-2 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-100 flex"
        }`}
      >
        <NavbarItem>
          <Button
            color="primary"
            variant="light"
            className="min-w-fit px-2"
            onClick={handleFavouriteOpen}
          >
            <Badge
              content={favourites?.length >= 1 ? favourites.length : null}
              color="primary"
              placement="bottom-right"
            >
              <MdFavorite className="h-6 w-6" />{" "}
            </Badge>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="light"
            className="min-w-fit px-2"
            onClick={handleCartOpen}
          >
            <Badge
              content={cart?.length >= 1 ? cart.length : null}
              color="primary"
              placement="bottom-right"
            >
              <IoCart className="h-6 w-6" />{" "}
            </Badge>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={path === item.href ? "primary" : "foreground"}
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
