import Link from 'next/link'
import SettingsIcon from '@mui/icons-material/Settings'
import GroupIcon from '@mui/icons-material/Group';

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
            <SettingsIcon />
          </li>
          <li>
            <Link href="/users">
              <GroupIcon />
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
