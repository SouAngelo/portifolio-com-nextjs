import Head from "next/head";
import React, { useState } from "react";
import { NavbarHome } from "../../components/Navbar";
import styles from "./styles.module.sass";
import Link from "next/link";
import Image from "next/image";
import pergaminho from "../../../public/images/pergaminho.png";
import { GetStaticProps } from "next";
import getPrismicClient from "../../services/prismic";
import * as prismicR from "@prismicio/richtext";
import Prismic from "@prismicio/client";
import Tilt from "react-vanilla-tilt";

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

type Port = {
  slug: string;
  title: string;
  language: string;
  image: string;
};

interface PortProps {
  portifolios: Port[];
  page: string;
  totalPages: string;
}

function Portifolio({ portifolios, page, totalPages }: PortProps) {
  const [visible, setVisible] = useState(false);

  const [projeto, setProjeto] = useState(portifolios);
  const [currentPage, setCurrentPage] = useState(Number(page))

  function handleContent() {
    setVisible(true);
  }

  // buscar novos posts
  async function reqPost(pageNumber: number){
    const prismic = getPrismicClient()

    const response = await prismic.query([
       Prismic.Predicates.at('document.type', 'portifolio')
    ], {
       orderings: '[document.last_publication_date desc]' ,// ordenar a mais recente
       fetch: ['portifolio.title', 'portifolio.language' , 'portifolio.image'], 
       pageSize: 3,
       page: String(pageNumber)
    })

    return response
 }

 async function navigatePage(pageNumber: number){
    const response = await reqPost(pageNumber)

    if(response.results.length === 0){
       return
    }

   const getPosts: any = response.results.map( projeto => {
       return{
          slug: projeto.uid, 
          title: prismicR.asText(projeto.data.title),
          image: projeto.data.image.url,
        
 
       }
    })
    
    setCurrentPage(pageNumber)
    setProjeto(getPosts)
 }

  return (
    <>
      <Head>
        <title>Portfolio | Angelo</title>
      </Head>
      <main className={styles.container}>
        {!visible ? (
          <div className={styles.parchment}>
            <Image src={pergaminho} alt="Pergaminho" quality={100} />

            <p>
              Parabéns por ter chegado até aqui! Você é ótimo com isso 😅.
              Agora, o tesouro é todo seu: clique no botão "abrir tesouro" e
              aproveite!
            </p>

            <button onClick={handleContent}>Abrir tesouro</button>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.containerGallery}>
              {projeto.map((projeto) => {
                return (
                  <Tilt className={styles.tilt}>
                    <div className={styles.gallery} key={projeto.slug}>
                      <Image
                        quality={100}
                        src={projeto.image}
                        alt={projeto.title}
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
                      />

                      <div className={styles.moreInfo}>
                        <h2>{projeto.title}</h2>
                        <p>{projeto.language}</p>

                        <Link
                          href={`/portfolio/${projeto.slug}`}
                          legacyBehavior
                        >
                          <a>Ver mais</a>
                        </Link>
                      </div>
                    </div>
                  </Tilt>
                );
              })}

              <div className={styles.buttonNavigate}>
                {Number(currentPage) >= 2 && (
                  <div>
                    <button onClick={() => navigatePage(1)}>
                      <FiChevronsLeft size={25} color="#fff" />
                    </button>
                    <button
                      onClick={() => navigatePage(Number(currentPage - 1))}
                    >
                      <FiChevronLeft size={25} color="#fff" />
                    </button>
                  </div>
                )}

                {Number(currentPage) < Number(totalPages) && (
                  <div>
                    <button
                      onClick={() => navigatePage(Number(currentPage + 1))}
                    >
                      <FiChevronRight size={25} color="#fff" />
                    </button>
                    <button onClick={() => navigatePage(Number(totalPages))}>
                      <FiChevronsRight size={25} color="#fff" />
                    </button>
                  </div>
                )}
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "portifolio")],{
      orderings: '[document.last_publication_date desc]' ,// ordenar a mais recente
      fetch: ['portifolio.title', 'portifolio.language' , 'portifolio.image'], 
      pageSize: 3 // 3 pub por pagina
   }
  );

  const portifolios = response.results.map((portifolio) => {
    return {
      slug: portifolio.uid,
      title: prismicR.asText(portifolio.data.title),
      language: prismicR.asText(portifolio.data.language),
      image: portifolio.data.image.url,
    };
  });

  return {
    props: {
      portifolios,
      page: response.page,
      totalPages: response.total_pages,
    },

    revalidate: 60 * 5,
  };
};
