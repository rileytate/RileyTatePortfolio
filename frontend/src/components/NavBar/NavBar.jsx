import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function NavBar () {

    return (
        <>
            <nav>
                <Link to={'/'} className={styles.link}>
                    <h2>Home</h2>
                </Link>

                <Link to={'/AboutMe'} className={styles.link}>
                    <h2>About Me</h2>
                </Link>

                <Link to={'/Projects'} className={styles.link}>
                    <h2>Projects</h2>
                </Link>

                <Link to={'/Experiences'} className={styles.link}>
                    <h2>Experiences</h2>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;