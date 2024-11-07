import Layout from "../components/layout";
import type { AppProps } from "next/app";
import "../globals.css";
import { useRouter } from "next/router";
import PcSectionLayout from "../components/pcSectionLayout";
import LaptopSectionLayout from "../components/laptopSectionLayout";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPcSectionRoute = router.pathname.startsWith("/pc");
  const isLaptopSectionRoute = router.pathname.startsWith("/laptop");

  return (
    <Layout>
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
