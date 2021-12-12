import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import welcomeImg from "../../assets/images/welcome-image.jpg"

import styles from "./styles.module.scss"


function Home() {
  return (
    <section className={styles.container}>
      <Header />

      <section className={styles.banner}>
        <main>
          <h1>Buymart</h1>

          <p>Compre roupas de marca pela metade do preço!</p>
        </main>
      </section>

      <section className={styles.content}>
        <main>
          <h2>Bem vindo</h2>

          <p>Somos a loja de roupas mais procurada da América Látina, com vários trófeus em atendimento, confiabilidade e entrega rápida.</p>

          <Link to="/about">Saiba mais</Link>
        </main>

        <img src={welcomeImg} alt="Roupas Buymart" />
      </section>
    </section>
  )
}

export { Home }

