import Hero from "@/components/landing-page/Hero";
import Head from "next/head";
import styles from "@/styles/home.module.scss";
import Features from "@/components/landing-page/Feature";
import Updates from "@/components/landing-page/Updates";
import Blogs from "@/components/landing-page/Blogs";

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
        <Updates />
        <div className={styles["blogs-header"]}>
        <div><h1>Latest Posts</h1></div>
        <div><h1>Older Posts</h1></div>
      </div>
        <Blogs />
      </main>
    </>
  );
}
