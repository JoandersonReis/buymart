import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import welcomeImg from "../../assets/images/welcome-image.jpg"
import hatImg from "../../assets/images/hat.jpg"
import tshirtImg from "../../assets/images/t-shirt.jpg"
import pantsImg from "../../assets/images/pants.jpg"
import shoesImg from "../../assets/images/shoes.jpg"

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

          <span>Testados e aprovados pela confederação do atendimento, e com expansão em breve no exterior.</span>

          <Link to="/about">Saiba mais</Link>
        </main>

        <img src={welcomeImg} alt="Roupas Buymart" />
      </section>

      <section className={styles.store}>
        <h2>Loja</h2>
        <div className={styles.storeContainer}>
          <div className={styles.block}>
            <img src={hatImg} alt="Chapéu vendido na Buymart" />

            <div className={styles.productInfo}>
              <div>
                <h3>Chapéu de praia</h3>

                <span>R$ 40,00</span>
              </div>

              <p>Chapéu muito confortável feito de material cromado.</p>
            </div>
          </div>

          <div className={styles.block}>
            <img src={tshirtImg} alt="T-Shirt branca vendida na Buymart" />

            <div className={styles.productInfo}>
              <div>
                <h3>Camiseta Branca</h3>

                <span>R$ 60,00</span>
              </div>

              <p>Camiseta branca de algodão para estampas.</p>
            </div>
          </div>
        </div>

        <div className={styles.storeContainer}>
          <div className={styles.block}>
            <img src={pantsImg} alt="Calças jeans vendidas na Buymart" />

            <div className={styles.productInfo}>
              <div>
                <h3>Calça Jeans</h3>

                <span>R$ 199,00</span>
              </div>

              <p>Calças Jeans de cor variada e de boa qualidade</p>
            </div>
          </div>

          <div className={styles.block}>
            <img src={shoesImg} alt="Tênis esportivo vendido na Buymart" />

            <div className={styles.productInfo}>
              <div>
                <h3>Tênis Esportivo</h3>

                <span>R$ 250,00</span>
              </div>

              <p>Tênis esportivo ótimo para corridas e muito resistente.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export { Home }

