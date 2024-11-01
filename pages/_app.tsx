import Layout from "../components/layout";
import type { AppProps } from "next/app";
import "../globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
