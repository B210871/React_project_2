


import styles from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <div className={styles.container} >

    
    <nav className={styles.navigation}>
        <div>
            <img src="/images/logo.png" alt="" />
        </div>
        <ul className={styles.navi}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </nav>
    </div>
  )
}
