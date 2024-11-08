import Layout from "../components/layout";
import type { AppProps } from "next/app";
import "../globals.css";
import { useRouter } from "next/router";
import PcSectionLayout from "../components/pcSectionLayout";
import LaptopSectionLayout from "../components/laptopSectionLayout";
import Cart from "../components/cart";
import Favs from "../components/favs";

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

export default App;
