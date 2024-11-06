import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children?: React.ReactNode;
}

export default function Drawer({
  isCartOpen,
  setIsCartOpen,
  title,
  children,
}: Props) {
  const [isVisible, setIsVisible] = useState(isCartOpen);

  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsCartOpen(false), 300);
  };

  useEffect(() => {
    if (isCartOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen && !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 h-screen">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className={`fixed right-0 top-0 min-h-screen w-full max-w-sm bg-background shadow-xl transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="side-menu-title"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <h2 id="side-menu-title" className="text-lg font-semibold">
              {title}
            </h2>
            <Button
              isIconOnly
              variant="light"
              onClick={onClose}
              aria-label="Cerrar menú"
            >
              <IoClose className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 h-full bg-background">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
