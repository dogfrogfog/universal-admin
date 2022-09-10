import type { ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode
}

function Button({ children }: IButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default Button