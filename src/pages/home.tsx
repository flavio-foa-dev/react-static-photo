import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import banner from "../assets/banner.png";
import styles from './home.module.scss'
import Galeria from "../components/Galeria/galeria";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria fotos do Espaco</h1>
            <img src={banner} alt="imagem daterra vista do espaco"/>
          </div>
        </section>
      </main>
      <div>
        <Galeria />
      </div>
    </>

  )
}
