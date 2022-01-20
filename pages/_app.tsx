import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import LayoutWrapper from "../src/components/LayoutWrapper";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
