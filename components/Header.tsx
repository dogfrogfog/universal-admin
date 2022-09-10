import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

import styles from './Header.module.scss'

function Header({ }) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
        </ul>
      </div>
      <div className={styles.user}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCog} />
          </li>
          <li>
            <Link href="/users">
              <FontAwesomeIcon icon={faUsers} />
            </Link>
          </li>
        </ul>
        <div className={styles.image}>
          {/* image */}
        </div>
      </div>
    </header>
  )
}

export default Header
