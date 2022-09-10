import Button from '@mui/material/Button'

import styles from './Table.module.scss'

function TableActions() {
  return (
    <div className={styles.tableActions}>
      <Button variant="contained">
        add
      </Button>
      <Button variant="contained">
        delete
      </Button>
      <Button variant="contained">
        cancel
      </Button>
    </div>
  )
}

export default TableActions
