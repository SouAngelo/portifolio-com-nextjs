import Head from "next/head";
import React, { useRef, useState } from "react";
import { NavbarHomePort } from "../../components/Navbar";
import { description } from "./description";

import Tilt from "react-vanilla-tilt";

import styles from "./styles.module.sass";
import frontAvatar from "../../../public/images/front-avatar.png";
import frontMoving from "../../../public/images/front-moving.png";
import frontStopr from "../../../public/images/front-avatar.png";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import { Navigation, Pagination  } from 'swiper';
import { EffectFade } from 'swiper';


import { FaSketch } from "react-icons/fa";


function About() {
  const [visible, setVisible] = useState(false);

  const [imageAvatar, setImageAvatar] = useState(frontAvatar);
  const [descriptionText, setDescriptionText] = useState(description.about);

  function handleChangeImage() {
    if (imageAvatar == frontAvatar) {
      setImageAvatar(frontMoving);
      setVisible(true);
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
              <p>{descriptionText}</p>

              <button onClick={handleChangeImage}>Bora 😎</button>
            </div>
          </div>
        ) : (
          <div className={styles.skills}>
            <div className={styles.avatarContainer}>
               <Image src={imageAvatar} alt="" width={600} height={600}  />
            </div>

            <div className={styles.skillsCards}>
              <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                effect={'fade'}
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
                        Habilidades com HTML puro e aplicações com frameworks, o
                        básico do desenvolvedor
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
                        Conhecimentos de css puro e um pouco de bootstrap, são
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
                          src="/images/react.webp"
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
