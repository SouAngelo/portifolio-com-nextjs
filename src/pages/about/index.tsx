import Head from 'next/head'
import React from 'react'
import { NavbarHomePort } from '../../components/Navbar'
import styles from './styles.module.sass'

function About() {
  return (
    <>
    <Head>
        <title>Sobre mim</title>
    </Head>
    <main className={styles.container}>About

        <NavbarHomePort/>
    </main>
    </>
  )
}

export default About