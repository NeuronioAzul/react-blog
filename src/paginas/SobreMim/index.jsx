import PostModelo from 'components/PostModelo'
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Mauro!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto sobre mim"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio voluptas, harum, quidem aspernatur deleniti ducimus laborum ratione aperiam nesciunt porro ullam et accusamus ea error earum corporis quos doloribus!</p>

    </PostModelo>
  )
}
