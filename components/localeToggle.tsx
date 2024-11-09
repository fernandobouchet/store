import { Button } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function LocaleToggle() {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    i18n.changeLanguage(newLocale);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <Button
      color="primary"
      variant="light"
      className="min-w-fit px-2 text-xl font-semibold"
      onClick={toggleLocale}
    >
      {locale === "en" ? "ES" : "EN"}
    </Button>
  );
}
