import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Mayoral ® España | Moda Online para Bebés, Niñas y Niños</title>
        <meta
          name="description"
          content="ENVÍOS GRATIS 🚀 desde 50€ y devolución gratuita 💙 COMPRA ONLINE Ropa para bebés, niñas y niños. Moda infantil sostenible de 0-16 años. Calidad y diseño español."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
