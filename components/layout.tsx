import { NextUIProvider } from "@nextui-org/react";
import { ShopProvider } from "../context/ShopContext";
import Navbar from "./navbar";
import Footer from "./footer";
import Cart from "./cart";
import Favs from "./favs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ShopProvider>
        <Cart />
        <Favs />
        <div className="fixed left-0 top-0 h-full w-full z-10">
          <div className="inset-0 -z-10 h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
        <div className="relative flex flex-col mx-auto h-full z-20">
          <Navbar />
          <main className="container flex flex-col mx-auto px-4 py-8 min-h-[100dvh] lg:min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </ShopProvider>
    </NextUIProvider>
  );
}
