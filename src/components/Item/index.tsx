import React from "react";

import styles from './styles.module.scss'

interface IItemProps {
  image: string,
  name: string,
  price: string,
  description: string
}

function Item({image, name, price, description}: IItemProps) {
  return (
    
    <div className={styles.block}>
      <img src={image} alt="vendido na Buymart" />

      <div className={styles.productInfo}>
        <div>
          <h3>{name}</h3>

          <span>R$ {price}</span>
        </div>

        <p>{description}</p>
      </div>
    </div>
  )
}


export { Item }

