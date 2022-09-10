import styles from './Title.module.scss'

function Title({ title }: { title: string }) {
  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  )
}

export default Title
