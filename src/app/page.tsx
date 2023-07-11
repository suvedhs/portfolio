import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from './head'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head />
      <div className={styles.homeContent}>
        <div className={styles.homeContentWrapper}>
          <div className={styles.introBigWrapper}>
            <h1 className={styles.introBig}>Howdy! I&apos;m Suvedh.</h1>
            <Image className={styles.hat} height={50} width={35} id='cowboyHat' src="/cowboy-hat.svg" alt=""></Image>
          </div>
          <h2 className={styles.introMed}>I&apos;m a professional full-stack developer.</h2>
          <p className={styles.introSmall}>I like working on <span className={styles.emphasis}>captivating</span> projects that <span className={styles.emphasis}>impact</span> my community.</p>
        </div>
        <div className={styles.homeImage}>
          <div className={styles.imageMask}></div>
          <Image id='headshot' src="/headshot.jpg" alt="Suvedh S." width={300} height={300} />
          <div className={styles.imageFrame}></div>
        </div>
      </div>
    </div>
  )
}
