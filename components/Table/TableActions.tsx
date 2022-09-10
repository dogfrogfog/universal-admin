import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faBan } from "@fortawesome/free-solid-svg-icons"

import Button from '../../ui-kit/Button'

import styles from './Table.module.scss'

function TableActions() {
  return (
    <div className={styles.tableActions}>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
        add
      </Button>
      <Button>
        <FontAwesomeIcon icon={faMinus} />
        delete
      </Button>
      <Button>
        <FontAwesomeIcon icon={faBan} />
        cancel
      </Button>
    </div>
  )
}

export default TableActions
