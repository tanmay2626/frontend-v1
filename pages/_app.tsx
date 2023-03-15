import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
