import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="text-foreground bg-background">
      <Navbar />
      <main className="container flex flex-col mx-auto px-4 min-h-[100dvh] h-full">
        {children}
      </main>
    </NextUIProvider>
  );
}
