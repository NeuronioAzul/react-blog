import './Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} link="/">Início</Link>
                <Link className={styles.link} link="/sobremim">Sobre Mim</Link>
            </nav>
        </header>
    )
}
