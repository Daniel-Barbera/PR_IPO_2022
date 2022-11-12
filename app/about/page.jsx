import styles from './page.module.css'
import Link from 'next/link'
export default function About () {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About</h1>
      <Link href='/app'>Home</Link>
    </div>
  )
}
