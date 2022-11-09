import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/home.module.sass";
import Navbar from "../components/Navbar";

export default function Home() {

  const [visible, setVisible] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      document.body.style.cssText = `--scrollTop: ${scrollY}px `;
    });
  });


  function handleChest(){
    let chest = document.querySelector('#chest')
    let textHome = document.querySelector('#text-home') as HTMLElement

    chest?.setAttribute('src', 'https://static.wixstatic.com/media/cc5f9f_4dcec35911ce466d9d6f86838b3c6021~mv2.png/v1/fill/w_598,h_451,al_c,lg_1,q_85,enc_auto/bau-tesouro.png') 
    
    setVisible(true)
    return;
    
  }

  return (
    <>
      <Head>
        <title>Bem vindo a página inicial</title>
      </Head>
      <main className={styles.wrapper}>
        <div className={styles.content}>
          <header className={styles.mainHeader}>
            <div className={styles.layers}>
              <div className={styles.layer__header}>
                <div className={styles.layers__caption}>
                  Desenvolvedor Front End
                </div>
                <div className={styles.layers__title}>Ângelo Gustavo</div>
              </div>

              <div id={styles.layer} className={styles.layers__base}></div>
              <div id={styles.layer} className={styles.layers__middle}></div>
              <div id={styles.layer} className={styles.layers__front}></div>
            </div>
          </header>

          <article className={styles.main_article}>
            <div className={styles.main_article__content}>
              {!visible ? <h2>Tesouro perdido</h2> : <h2>Tesouro encontrado</h2>}
              <img src="https://cdn-icons-png.flaticon.com/512/1907/1907938.png" onClick={handleChest} id='chest'/>
              {!visible ? (
                <p>Encontre o tesouro perdido em algum lugar...</p>
              ) : (
                <p className={styles.OpacityText} id='text-home'>
                Uau!! Parabéns, você me encontrou 😀 Não imaginei que iriam me achar aqui em baixo... Olha, já que chegou até aqui,
                vou te contar o que eu estava escondendo: Se você olhar mais a baixo, verá
                a chave do báu que estava dentro desse baú que você já abriu, com todos os meus projetos. O nome da chave é: <span>PORTIFÓLIO</span>. 
                Clique na chave e poderá ver o tesouro perdido!
              </p>
              )}
            </div>

            {visible && (
               <Navbar/>
            )}
          </article>
        </div>
      </main>
    </>
  );
}
