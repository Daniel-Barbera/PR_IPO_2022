import styles from './page.module.css';
import Link from 'next/link';

const links = [{
  label: 'Simon',
  route: '/games/simon'
}, {
  label: 'Math',
  route: '/games/math'
}, {
  label: 'Memory',
  route: '/games/memory'
}]

export default function Games () {
  return (
    <>
      <h1 className={styles.title}>Games</h1>
      <div className={styles.games}>
        {links.map(({ label, route }) => (
          <Link href={route} key={route}>
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}
