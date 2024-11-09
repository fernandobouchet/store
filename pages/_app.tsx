import Layout from "../components/layout";
import type { AppProps } from "next/app";
import "../globals.css";
import { useRouter } from "next/router";
import PcSectionLayout from "../components/pcSectionLayout";
import LaptopSectionLayout from "../components/laptopSectionLayout";
import Cart from "../components/cart";
import Favs from "../components/favs";
import { appWithTranslation, UserConfig } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPcSectionRoute = router.pathname.startsWith("/pc");
  const isLaptopSectionRoute = router.pathname.startsWith("/laptop");

  return (
    <Layout>
      <>
        <Cart />
        <Favs />
      </>
      {isPcSectionRoute ? (
        <PcSectionLayout>
          <Component {...pageProps} />
        </PcSectionLayout>
      ) : isLaptopSectionRoute ? (
        <LaptopSectionLayout>
          <Component {...pageProps} />
        </LaptopSectionLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
