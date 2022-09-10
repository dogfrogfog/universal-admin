import { useState } from 'react'
import cl from 'classnames'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import styles from './Sidebar.module.scss'

function Sidebar() {
  const [isOpen, setOpenStatus] = useState(false)

  const toggleSidebar = () => setOpenStatus(v => !v)

  return (
    <div className={cl(styles.sidebarContainer, !isOpen ? styles.hidden : '')}>
      menu 2
      <button className={styles.collapseButton} onClick={toggleSidebar}>
        <ExpandLessIcon />
      </button>
    </div>
  )
}

export default Sidebar
