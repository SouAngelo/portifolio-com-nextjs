import Head from "next/head";
import React from "react";
import { NavbarHome } from "../../components/Navbar";
import styles from "./styles.module.sass";

function Portifolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Angelo</title>
      </Head>
      <main className={styles.container}>
        <div>
          PORTIFOLIO
        </div>
        <NavbarHome />
      </main>
    </>
  );
}

export default Portifolio;
