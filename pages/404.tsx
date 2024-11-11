import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next/types";
import { IoIosHome } from "react-icons/io";

function Custom404() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#006fee] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("error.title")}
        </h2>
        <p className="text-gray-600 mb-8">{t("error.text")}</p>
        <Button
          as={Link}
          href="/"
          color="primary"
          className="bg-[#006fee] text-white"
          startContent={<IoIosHome className="h-4 w-4" />}
        >
          {t("error.button")}
        </Button>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "footer"])),
    },
  };
};

export default Custom404;
