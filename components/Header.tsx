import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import styles from './Header.module.scss'

const DEFAULT_ACTIVE_PROJECT = ''

function Header({}) {
  const [activeProject, setActiveProject] = useState();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        TF
      </div>
      <div className={styles.menu}>
        <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
          <li>menu item 3</li>
          <li>menu item 4</li>
        </ul>
      </div>
      <div className={styles.user}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCog} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} />
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
