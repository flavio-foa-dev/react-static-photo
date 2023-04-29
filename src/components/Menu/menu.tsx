import styles from './menu.module.scss'

import home from '../../assets/icones/home.png'
import novas from '../../assets/icones/novas.png'
import curtidas from '../../assets/icones/curtidas.png'
import surpreenda from '../../assets/icones/surpreenda.png'
import vistas from '../../assets/icones/vistas.png'


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="home" />
          <a href="/">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={curtidas} alt="likes" />
          <a href="http://">Mais likes</a>
        </li>
        <li className={styles.menu__item}>
          <img src={vistas} alt="vistas" />
          <a href="http://">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="novas" />
          <a href="#">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda} alt="surpreenda" />
          <a href="#">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}

