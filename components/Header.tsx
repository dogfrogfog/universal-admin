import Link from 'next/link'
import { FiSettings, FiUsers } from 'react-icons/fi'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <div className={styles.menu}>
        {/* <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
        </ul> */}
      </div>
      <div className={styles.user}>
        <ul>
          <li>
            <Link href="/settings">
              <FiSettings />
            </Link>
          </li>
          <li>
            <Link href="/users">
              <FiUsers />
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/profile">
            <div className={styles.image}>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
