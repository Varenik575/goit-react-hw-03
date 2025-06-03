import { useState } from "react"
import styles from "./SearchBox.module.css"

function SearchBox ({handleChange}) {
    


    return (
        <div className={styles.wrapper}>
            <span className={styles.titleText}>Find contacts by name</span>
            <input className={styles.searchField} type="text" onChange={handleChange} />
        </div>
    )
}
export default SearchBox;