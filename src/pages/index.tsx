import Head from "next/head";
import * as React from "react";
import { NextPage } from "next";
import index from "./index.module.scss";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={index.container}>
      <Head>
        <title>Test App</title>
      </Head>

      <main>
        <h1 className={index.title}>SSGとSSRを比べてみた</h1>
        <div className={index.grid}>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
