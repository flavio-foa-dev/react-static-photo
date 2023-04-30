
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./Cards";
import { useState } from "react";

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const  tags = [ "Todos",...new Set(fotos.map((item) => item.tag))]

  const filtered =(tag:any= null)=>{
    if(tag=== "Todos"){
      return setItens(fotos)
    }

    const itelFiltered = fotos.filter((item)=> item.tag === tag)
    setItens(itelFiltered)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtered={filtered}/>
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
