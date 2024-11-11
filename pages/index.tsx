import { Button, Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import RandomLinkButton from "../components/randomLinkButton";
import { useTranslation } from "next-i18next";

function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation("home");

  return (
    <section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
            {t("hero.text")}
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="w-full">
              <CardBody className="p-0">
                <div className="relative w-full h-60">
                  <Image
                    src="/images/laptops.webp"
                    alt="Laptop image."
                    fill
                    className="object-cover"
                  />
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start p-6">
                <h3 className="font-bold text-2xl mb-2">
                  {t("sections.laptop.title")}
                </h3>
                <p className="text-default-500 mb-4">
                  {t("sections.laptop.text")}
                </p>
                <Button
                  as={Link}
                  href={`/${locale}/laptop`}
                  color="primary"
                  variant="flat"
                  className="flex w-full"
                >
                  {t("sections.laptop.button")}
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardBody className="p-0">
                <div className="relative w-full h-60">
                  <Image
                    src="/images/desktops.webp"
                    alt="Desktop image."
                    fill
                    className="object-cover"
                  />
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start p-6">
                <h3 className="font-bold text-2xl mb-2">
                  {t("sections.desktop.title")}
                </h3>
                <p className="text-default-500 mb-4">
                  {t("sections.desktop.text")}
                </p>
                <Button
                  as={Link}
                  href={`/${locale}/desktop`}
                  color="primary"
                  variant="flat"
                  className="flex w-full"
                >
                  {t("sections.desktop.button")}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary-100 rounded-lg py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("offers.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("offers.text")}</p>
          <RandomLinkButton />
        </div>
      </section>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home", "footer"])),
    },
  };
};

export default Home;
