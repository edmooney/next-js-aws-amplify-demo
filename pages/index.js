import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS App on AWS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a> is amazing!
        </h1>
        <p>
          This demo app is a part of tutorial:{" "}
          <strong>
            <a href="#">
              Deploy Next JS/Aws - amplify
            </a>
          </strong>{" "}
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="#">
        </a>
      </footer>
    </div>
  );
}
