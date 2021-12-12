import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png"

import styles from "./styles.module.scss"


function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logoImg} alt="Logo Buymart" />
      </Link>

      <nav className={styles.topBar}>
        <Link to="/store">Loja</Link>
        <Link to="/new">Notícias</Link>
        <Link to="/about">Quem somos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  )
}

export { Header }

