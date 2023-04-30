import styles from './Tags.module.scss'

export default function Tags(props: any) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
       {props.tags.map((item: any) => {
          return (
            <li
              key={item}
              onClick={()=> props.filtered(item)}
            >
              {item}
            </li>
          )
       })}
      </ul>
    </div>
  )
}
