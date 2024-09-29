import Head from "next/head";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <Link rel="icon" href="/favicon.ico"></Link>
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
