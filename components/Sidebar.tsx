import { useState } from 'react'
import cl from 'classnames'

import styles from './Sidebar.module.scss'

function Sidebar() {
  const [isOpen, setOpenStatus] = useState(true)

  const toggleSidebar = () => setOpenStatus(v => !v)

  return (
    <div className={cl(styles.sidebarContainer, !isOpen ? styles.hidden : '')}>
      <button onClick={toggleSidebar}>
        _______
      </button>
    </div>
  )
}

export default Sidebar
