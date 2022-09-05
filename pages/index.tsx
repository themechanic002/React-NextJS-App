import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elijah Ahn</title>
      </Head>
      <section>
        <p>[Elijah Ahn Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul></ul>
      </section>
    </div>
  );
};

export default Home;
