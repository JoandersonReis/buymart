import React from "react";
import { Link } from "react-router-dom";

import styles from './styles.module.scss'


interface IButton {
  to: string,
  name: string,
}

function Button({ to, name }: IButton) {
  return (
    <Link className={styles.button} to={to}>{name}</Link>
  )
}



export { Button }
