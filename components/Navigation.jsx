import Link from 'next/link'
import styles from './Navigation.module.css'
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Login',
  route: '/login'

}, {
  label: 'Posts',
  route: '/posts'
}]

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li className={styles.li} key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  )
}

export default Navigation
