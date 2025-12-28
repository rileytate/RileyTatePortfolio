import styles from "./footer.module.css"

function Footer () {

    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.left}>
                    <h2>Find Me</h2>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/riley-tate-612708333" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/rileytate" target="_blank">GitHub</a></li>
                        <li>Instagram: rbtate19</li>
                        <li>Strava: rbtate19</li>

                    </ul>
                </section>
                <section className={styles.right}>
                    <h2>Contact Me</h2>
                    <ul>
                        <li>Email: rbtate19@gmail.com</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer