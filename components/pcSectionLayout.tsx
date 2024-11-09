import { useTranslation } from "next-i18next";

interface Props {
  children: React.ReactNode;
}

export default function PcSectionLayout({ children }: Props) {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">
        {t("nav.desktop")}
      </h1>
      <section>{children}</section>
    </div>
  );
}
