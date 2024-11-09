import { useTranslation } from "next-i18next";

interface Props {
  children: React.ReactNode;
}

export default function LaptopSectionLayout({ children }: Props) {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">{t("nav.laptop")}</h1>
      <section>{children}</section>
    </div>
  );
}
