import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.outerDiv}>
      <p>Welcome to Web Journal!</p>
      <p>Here you can login or register for an account. This is
        additional filler text. A description of the service will
        be included here once the application is more developed. 
        Additionally, some sort of images should be added. All css
        will be changed as well for a more modern appearance.
      </p>
      <div className={styles.buttonDiv}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Register</button>
      </div>
    </div>
  );
}
