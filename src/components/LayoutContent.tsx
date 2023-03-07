import React from "react";
import Head from "next/head";

export const LayoutContent = ({children, ...props}: any) => {
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
      <main>
        {children}
      </main>
    </>
  );
};
