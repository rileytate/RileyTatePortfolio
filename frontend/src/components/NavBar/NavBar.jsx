import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function NavBar () {

    return (
        <>
            <nav>
                <Link to={'/RileyTatePortfolio/'} className={styles.link}>
                    <h2>Home</h2>
                </Link>

                <Link to={'/RileyTatePortfolio/AboutMe'} className={styles.link}>
                    <h2>About Me</h2>
                </Link>

                <Link to={'/RileyTatePortfolio/Projects'} className={styles.link}>
                    <h2>Projects</h2>
                </Link>

                <Link to={'/RileyTatePortfolio/Experiences'} className={styles.link}>
                    <h2>Experiences</h2>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;