import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function RandomLinkButton() {
  const { locale } = useRouter();
  const { t } = useTranslation("home");
  const random = Math.floor(Math.random() * 24) + 1;

  let category = random >= 13 ? "laptop" : "desktop";

  return (
    <Button
      as={Link}
      href={`/${locale}/${category}/product/${random}`}
      aria-current="page"
      size="lg"
      color="primary"
      variant="solid"
    >
      {t("offers.randomButton")}
    </Button>
  );
}
