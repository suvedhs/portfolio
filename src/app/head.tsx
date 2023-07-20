import styles from '../styles/head.module.css'
import FancyLink from './FancyLink'

export default function Head() {
  const homeLink = { name: 'Home', to: '/' }
  const aboutLink = { name: 'About', to: '/about' }
  const projectsLink = { name: 'Projects', to: '/projects' }
  const contactLink = { name: 'Contact', to: '/contact', isLast: true }

  return (
    <div className={styles.head}>
      <div className={styles.logoWrapper}>Suvedh Srikanth</div>
      <div className={styles.headerMenu}>
        <FancyLink link={homeLink} />
        <FancyLink link={aboutLink} />
        <FancyLink link={projectsLink} />
        <FancyLink link={contactLink} />
      </div>
    </div>
  )
}
