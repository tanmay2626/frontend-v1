import Hero from "@/components/landing-page/Hero";
import Head from "next/head";
import styles from "@/styles/home.module.scss";
import Features from "@/components/landing-page/Feature";

export default function Home() {
  return (
    <>
      <Head>
        <title>Actual01</title>
        <meta name="description" content="Actual01 landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Features />
      </main>
    </>
  );
}
