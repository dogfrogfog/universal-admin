import { useState } from 'react'
import cl from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

import styles from './Sidebar.module.scss'

function Sidebar() {
  const [isOpen, setOpenStatus] = useState(false)

  const toggleSidebar = () => setOpenStatus(v => !v)

  return (
    <div className={cl(styles.sidebarContainer, !isOpen ? styles.hidden : '')}>
      menu 2
      <button className={styles.collapseButton} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  )
}

export default Sidebar
