import Head from "next/head";
import React, { useState } from "react";
import { NavbarHome } from "../../components/Navbar";
import styles from "./styles.module.sass";
import Link from "next/link";
import Image from "next/image";
import pergaminho from "../../../public/images/pergaminho.png";

function Portifolio() {
  const [visible, setVisible] = useState(false);

  function handleContent(){
    setVisible(true)
  }

  return (
    <>
      <Head>
        <title>Portfolio | Angelo</title>
      </Head>
      <main className={styles.container}>
        {!visible ? (
          <div className={styles.parchment}>
            <Image 
             src={pergaminho}
             alt='Pergaminho'
             quality={100}
            />

            <p>Parabéns por ter chegado até aqui! Você é ótimo com isso 😅. Agora, o tesouro 
              é todo seu: clique no botão "abrir tesouro" e aproveite!
            </p>

            <button onClick={handleContent}>Abrir tesouro</button>
          </div>
        ) : (
          <div className={styles.content}>

            <div className={styles.containerGallery}>
              <div className={styles.gallery}>
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wqzotbyfysz9pbfk9jus.jpg"
                  alt=""
                />

                <div className={styles.moreInfo}>
                  <h2>Landing Page</h2>
                  <p>Javascript</p>

                  <Link href="/" legacyBehavior>
                    <a>Ver mais</a>
                  </Link>
                </div>
              </div>

              <div className={styles.gallery}>
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wqzotbyfysz9pbfk9jus.jpg"
                  alt=""
                />

                <div className={styles.moreInfo}>
                  <h2>Landing Page</h2>
                  <p>Javascript</p>

                  <Link href="/" legacyBehavior>
                    <a>Ver mais</a>
                  </Link>
                </div>
              </div>

              <div className={styles.gallery}>
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wqzotbyfysz9pbfk9jus.jpg"
                  alt=""
                />

                <div className={styles.moreInfo}>
                  <h2>Landing Page</h2>
                  <p>Javascript</p>

                  <Link href="/" legacyBehavior>
                    <a>Ver mais</a>
                  </Link>
                </div>
              </div>

              <div className={styles.gallery}>
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wqzotbyfysz9pbfk9jus.jpg"
                  alt=""
                />

                <div className={styles.moreInfo}>
                  <h2>Landing Page</h2>
                  <p>Javascript</p>

                  <Link href="/" legacyBehavior>
                    <a>Ver mais</a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        <NavbarHome />
      </main>
    </>
  );
}

export default Portifolio;
