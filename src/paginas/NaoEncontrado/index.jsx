import BotaoPrincipal from 'components/BotaoPrincipal'
import styles from './NaoEncontrado.module.css'
import Erro404 from 'assets/erro_404.png'

export default function NaoEncontrado() {
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemAstro}
                    src={Erro404}
                    alt="Astronauta perdido"
                />

            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}
