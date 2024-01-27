import Navbar from "./navbar";
import styles from "./header.module.css"

export default function Header(){
    return(
        <>
        <Navbar/>
            <div className={styles.headerBackground}>
            </div>
        </>
    )
}