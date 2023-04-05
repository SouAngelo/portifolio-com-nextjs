import Head from "next/head";
import React, { useState } from "react";
import { NavbarHomePort } from "../../components/Navbar";
import Link from "next/link";

import styles from "./styles.module.sass";
import frontAvatar from "../../../public/images/front-avatar.png";
import frontMoving from "../../../public/images/front-moving.png";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper";
import { EffectFade } from "swiper";

import { FaSketch, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function About() {
  const [visible, setVisible] = useState(false);

  const [imageAvatar, setImageAvatar] = useState(frontAvatar);

  function handleChangeImage() {
    if (imageAvatar == frontAvatar) {
      setImageAvatar(frontMoving);
      setVisible(true);
    } else if (imageAvatar == frontMoving) {
      setVisible(false);
      setImageAvatar(frontAvatar);
    }
  }

  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>
      <main className={styles.container}>
        {!visible ? (
          <div className={styles.introductionAbout}>
            <Image src={imageAvatar} alt="" width={600} height={600} />

            <div className={styles.textAbout}>
              <p>
                Olá, eu me chamo Ângelo Gustavo e nessa página você verá um
                pouco sobre mim. Eu sou de São Paulo - SP e tenho 21 anos.
                Conheci aprogramação quando parei para pensar sobre o meu
                futuro, sobre o que eu queria fazer da vida. Pesquisei muito até
                conhecer esse universo incrível em que me identifiquei no mesmo
                momento em que conheci. Decidi estudar programação e entrei na
                faculdade. Porém, decidi sair e seguir os estudos focado em
                aprender as tecnologias necessárias para poder entrar no mercado
                de trabalho. Desde então estive em uma constante evolução, me
                apaixonei pelo desenvolvimento front end e hoje procuro a minha
                primeira oportunidade no mercado. Atualmente, tenho em meu
                curriculo as tecnologias que o mercado precisa, pois foquei o
                meu tempo em aprender de uma forma qualitativa, e enfim consegui
                o meu primeito objetivo: ser um dev front end. Agora, partiu
                conhecer as minhas Skills, Soft Skills, ver os meus contatos e
                poder baixar o meu CV! 😎
              </p>

              <button onClick={handleChangeImage}>Bora 😎</button>
            </div>
          </div>
        ) : (
          <div className={styles.skills}>
            <div className={styles.avatarContainer}>
              <Image
                src={imageAvatar}
                alt=""
                width={600}
                height={600}
                onClick={handleChangeImage}
              />
            </div>

            <div className={styles.skillsCards}>
              <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                effect={"fade"}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                className={styles.mySwiper}
              >
                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/html.webp"
                        alt=""
                      />
                    </div>

                    <h2>HTML</h2>

                    <p>
                      Habilidades com HTML, onde é feito toda a estrutura de um
                      site. Textos, imagens, videos, etc.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/css.webp"
                        alt=""
                      />
                    </div>
                    <h2>CSS</h2>

                    <p>
                      Conhecimentos de css puro e um pouco de bootstrap. São
                      usados para estilizar uma página.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/javascript.png"
                        alt=""
                      />
                    </div>

                    <h2>Javascript</h2>

                    <p>
                      A linguagem que eu escolhi. Com ela é possível fazer
                      aplicações inteligentes e dinâmicas.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/typescript.png"
                        alt=""
                      />
                    </div>

                    <h2>Typescript</h2>

                    <p>
                      o typescript serve para tipar o javascript, tornando o
                      código mais seguro e livre de falhas.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/sass.png"
                        alt=""
                      />
                    </div>

                    <h2>SASS</h2>

                    <p>
                      O sass é um pré-processador de Css. Torna possível um
                      código enxuto e dinâmico para estilizar.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/react.png"
                        alt=""
                      />
                    </div>

                    <h2>React Js</h2>

                    <p>
                      React Js é uma bíblioteca de Javascript, dando poderes
                      adicionais a linguagem.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/next.png"
                        alt=""
                      />
                    </div>

                    <h2>next js</h2>

                    <p>
                      Next js é um framework de front end com integrações
                      back-end, dando poderes adicionais ao React Js.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/git.png"
                        alt=""
                      />
                    </div>

                    <h2>GIT</h2>

                    <p>
                      Git é a principal ferramenta de versionamente de código
                      entre os devs.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/github.png"
                        alt=""
                      />
                    </div>

                    <h2>github</h2>

                    <p>
                      é uma plataforma que permite deixar os códigos em nuvem.
                      Muito utilizada pelas empresas.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/proativo.png"
                        alt=""
                      />
                    </div>

                    <h2>proatividade</h2>

                    <p>
                      sempre busquei ter iniciativa, auto-liderança, agilidade e
                      coletividade. Me esforço para ter uma perfomance de
                      qualidade.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/comunicacao.png"
                        alt=""
                      />
                    </div>

                    <h2>comunicação</h2>

                    <p>
                      sempre tive facilidade em apresentações, leituras,
                      discursos e conversas. Tenho uma ótima oratória.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/equipe.png"
                        alt=""
                      />
                    </div>

                    <h2>trabalho em equipe</h2>

                    <p>
                      sempre tomei a iniciaiva e a liderança em trabalhos em
                      grupo. Gosto de ouvir as pessoas e aprender com elas.
                    </p>

                    <FaSketch size={30} />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Link
                        href="https://drive.google.com/u/0/uc?id=1WC59ejD6N-7jNNbX8b89MutaOTFaXqu-&export=download"
                        legacyBehavior
                      >
                        <a target="blank" style={{ fontSize: "0px" }}>
                          <Image
                            width={100}
                            height={100}
                            src="/images/cv.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>

                    <h2>meu currículo</h2>

                    <p>
                      Clique na imagem escrito "CV" ou no Diamante, se preferir,
                      para fazer o download do currículo.
                    </p>

                    <Link
                      href="https://drive.google.com/u/0/uc?id=1v6PIfD15Mlfh1pcxdhKuxErV-wx9rMDu&export=download"
                      legacyBehavior
                    >
                      <a target="blank">
                        <FaSketch size={30} />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={styles.skillCard}>
                    <div className={styles.containerImg}>
                      <Image
                        width={100}
                        height={100}
                        src="/images/contato.png"
                        alt=""
                      />
                    </div>

                    <h2>meus contatos</h2>

                    <p>
                      Clique no ícone da rede social que deseja me contactar.
                    </p>

                    <div className={styles.contactContainer}>
                      <Link
                        href="https://api.whatsapp.com/send?phone=5511985024510"
                        legacyBehavior
                      >
                        <a target="blank">
                          <FaWhatsapp size={30} />
                        </a>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/souangelogustavo/"
                        legacyBehavior
                      >
                        <a target="blank">
                          <FaLinkedin size={30} />
                        </a>
                      </Link>

                      <Link href="https://github.com/SouAngelo" legacyBehavior>
                        <a target="blank">
                          <FaGithub size={30} />
                        </a>
                      </Link>
                    </div>

                    <div className={styles.gmail}>
                      <SiGmail size={25} />
                      <p>angelotj43@gmail.com</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}

        <NavbarHomePort />
      </main>
    </>
  );
}

export default About;
