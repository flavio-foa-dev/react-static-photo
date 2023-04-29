
import Tags from '../Tags/tags'
import styles from './galeria.module.scss'
import fotos from '../../data/fotos.json'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__lista}>

      </ul>
    </section>
  )
}
