import Link from "next/link"
import styles from "./Header.module.css"
import { Categories } from "@/utils/categories"

function Header(){
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        {Object.entries(Categories).map((c, i) => (
          <Link 
            key={i} 
            href={c[1].id == "top" ? "" : c[1].id}
            className={styles.button}
          >
            {c[1].name}
          </Link>
        ))}
      </div>

    </div>
  )
}

export {Header}
