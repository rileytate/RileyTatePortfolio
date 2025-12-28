import styles from "./homeCards.module.css";
import island from "../../images/IslandSongSceneWithLogos.png"; /* CHANGE LATER */
import run from "../../images/RileyTrack.jpg"; /* CHANGE LATER */
import climb from "../../images/Top50_Climbing.jpg"; /* CHANGE LATER */
import career from "../../images/RileyAtCareerFair.jpg"; /* CHANGE LATER */
import { Link } from "react-router-dom";

function HomeCards () {

    return (
        <>
            <section className={styles.cards_section}>

                <Link to={'/AboutMe'} className={styles.card}>
                    <img src={climb} alt="about me photo" />
                    <h1>About Me</h1>
                </Link>


                <Link to={'/Projects'} className={styles.card}>
                    <img src={island} alt="projects photo" />
                    <h1>My Projects</h1>
                </Link>

                <Link to={'/Experiences'} className={styles.card}>
                    <img src={career} alt="experience photo" />
                    <h1>My Experiences</h1>
                </Link>
            </section>
        </>
    )
}

export default HomeCards