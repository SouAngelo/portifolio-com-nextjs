import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import getPrismicClient from "../../services/prismic";
import * as prismicR from "@prismicio/richtext";
import Head from "next/head";
import styles from "./project.module.sass";
import { NavbarProject } from "../../components/Navbar";
import Image from "next/image";
import Link from 'next/link'

import { FaGithub, FaSketch } from 'react-icons/fa'

interface ProjectProps {
  projeto: {
    slug: string;
    title: string;
    image: string;
    description: string;
    technology: string;
    linkGithub: string;
    linkDeploy: string;
  };
}

function Projeto({ projeto }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{projeto.title}</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <h1>{projeto.title}</h1>
          <div className={styles.imageProject}>
            <Image
              quality={100}
              src={projeto.image}
              alt={projeto.title}
              width={600}
              height={350}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
            />
          </div>

          <div className={styles.infoProject}>
            <p className={styles.description}>{projeto.description}</p>
            <p className={styles.technology}>{projeto.technology}</p>
          </div>

          <div className={styles.projectLinks}>
            <Link href={projeto.linkGithub} legacyBehavior>
                <a target='blank'><FaGithub className={styles.github} size={25}/><p>Github</p></a>
            </Link>

            <Link href={projeto.linkDeploy} legacyBehavior>
                <a target='blank'><FaSketch className={styles.Site} size={25}/><p>Site</p></a>
            </Link>
          </div>
        </div>

        <NavbarProject />
      </main>
    </>
  );
}

export default Projeto;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params as ParsedUrlQuery;
  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("portifolio", String(slug), {});

  if (!response) {
    return {
      redirect: {
        destination: "/portfolio",
        permanent: true,
      },
    };
  }

  const projeto = {
    slug: slug,
    title: prismicR.asText(response.data.title),
    image: response.data.image.url,
    description: prismicR.asText(response.data.description),
    technology: prismicR.asText(response.data.technology),
    linkGithub: response.data.github.url,
    linkDeploy: response.data.deploy.url,
  };

  return {
    props: {
      projeto,
    },
  };
};
