import styles from './page.module.css';
import Link from 'next/link';
const links = [{
  label: 'Simon',
  route: '/app/games/simon'
}, {
  label: 'Math',
  route: '/app/games/math'
}, {
  label: 'Memory',
  route: '/app/games/memory'
}]

export default function Games () {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Games</h1>
      <div className={styles.games}>
        {links.map(({ label, route }) => (
          <Link href={route} key={route}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
