import styles from '../styles/head.module.css'

export default function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.logoWrapper}>Suvedh S</div>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>Home</div>
        <div className={styles.headerMenuItem}>About</div>
        <div className={styles.headerMenuItem}>Projects</div>
        <div className={styles.headerMenuItem}>Contact</div>
      </div>
    </div>
  )
}
