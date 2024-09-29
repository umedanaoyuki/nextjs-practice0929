import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import utilStyles from "../src/styles/utils.module.css";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <Link rel="icon" href="/favicon.ico"></Link>
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
