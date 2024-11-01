import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Navbar />
      <main className="container flex flex-col mx-auto px-4">{children}</main>
    </NextUIProvider>
  );
}
