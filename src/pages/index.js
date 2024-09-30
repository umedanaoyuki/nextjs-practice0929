import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>
            私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
          </p>
        </section>

        <section>
          <h2>エンジニアのブログ</h2>
          <div>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" alt=""></img>
              </Link>
              <Link href="/" legacyBehavior>
                <a>SSGとSSRの使い分けの場面はいつなのか？</a>
              </Link>
              <br />
              <small>February 23, 2020</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
