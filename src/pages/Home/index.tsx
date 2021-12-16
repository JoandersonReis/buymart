import React from "react";
import { FaPercent } from "react-icons/fa"

import { Header } from "../../components/Header";
import { Item } from "../../components/Item"

import welcomeImg from "../../assets/images/welcome-image.jpg"
import hatImg from "../../assets/images/hat.jpg"
import tshirtImg from "../../assets/images/t-shirt.jpg"
import pantsImg from "../../assets/images/pants.jpg"
import shoesImg from "../../assets/images/shoes.jpg"

import styles from "./styles.module.scss"
import { Button } from "../../components/Button";


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

          <Button to="/about" name="Saiba mais" />
        </main>

        <img src={welcomeImg} alt="Roupas Buymart" />
      </section>

      <section className={styles.store}>
        <h2>Destaques</h2>
        <div className={styles.storeContainer}>
          <Item 
            image={hatImg} 
            price="40,00" 
            name="Chapéu de praia" 
            description="Chapéu muito confortável feito de material cromado." 
          />

          <Item 
            image={tshirtImg} 
            price="60,00" 
            name="Camiseta Branca" 
            description="Camiseta branca de algodão para estampas." 
          />
        </div>

        <div className={styles.storeContainer}>
          <Item 
            image={pantsImg} 
            price="160,00" 
            name="Calça Jeans" 
            description="Calças Jeans de cor variada e de boa qualidade." 
          />

          <Item 
            image={shoesImg} 
            price="190,00" 
            name="Tênis Esportivo" 
            description="Tênis esportivo ótimo para corridas e muito resistente." 
          />
        </div>

        <Button to="/store" name="Veja mais" />
      </section>


      <section className={styles.news}>
        <div className={styles.block}>
          <FaPercent size={74} color="#998FC7" /> <br/>

          <span>Venha conferir toda sexta</span>

          <h2>Promoções com até 50% de desconto</h2>

          <p>Promoções em sapatos, camisetas, bolsas e muito mais. Não perca nossas íncriveis promoções!</p>

          <Button name="Venha conferir" to="/news" />
        </div>
      </section>

      <section className={styles.comments}>
        <div className="block">
          <h2>Depoimentos</h2>
        </div>
      </section>
    </section>
  )
}

export { Home }

