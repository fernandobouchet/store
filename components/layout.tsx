import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="text-foreground">
      <div className="fixed left-0 top-0 h-full w-full z-10">
        <div className="inset-0 -z-10 h-full w-full bg-white absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="relative mx-auto h-screen w-full z-20">
        <Navbar />
        <main className="container flex flex-col mx-auto px-4">{children}</main>
      </div>
    </NextUIProvider>
  );
}
