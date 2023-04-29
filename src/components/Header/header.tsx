import search from './search.png'
import logo from './logo.png'
import styles from './header.module.scss'


export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo"/>
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          id="searc"
          placeholder="O Que Procura ?"
        />
        <img src={search} alt="icone Busca" />
      </div>
    </header>
  )
}
