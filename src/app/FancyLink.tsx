import styles from '../styles/fancyLink.module.css'

export default function FancyLink (props: {link: {name: string, to: string, isLast?: boolean }}) {
  const { link } = props

  return (
      <a className={ link.isLast ? `${styles["link"]} ${styles["lastHead"]}` : styles.link } href={link.to}>
        <span>{link.name}</span>
        <svg className={styles.link_graphic} width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
        </svg>
      </a>
  )
}
