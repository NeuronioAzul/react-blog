import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className="styles.{titulo}">Olá Mundo</h1>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis possimus facilis aliquid. Sapiente, temporibus quod, eos illo in cumque quam recusandae neque unde, cupiditate fugit rerum similique! Molestias, quia.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          className={styles.circuloColorido}
          aria-hidden={true}
        />
        <img
          src={minhaFoto}
          alt="Foto do Mauro"
          className={styles.minhaFoto}
        />
      </div>
    </div>
  )
}
