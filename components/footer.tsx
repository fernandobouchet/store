import { Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="w-full bg-background border-t border-divider mt-10 p-2">
      <div className="container mx-auto px-4 text-center text-default-500">
        <p>&copy; {t("copy")}</p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="hover:text-foreground">
            {t("terms")}
          </Link>
          <Link href="#" className="hover:text-foreground">
            {t("policiy")}
          </Link>
          <Link href="#" className="hover:text-foreground">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
