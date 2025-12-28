import headshot from "../../images/ChapmanHeadshot.jpg"
import styles from "./hero.module.css"

function Hero () {

    return (
        <>
            <section className={styles.hero_card}>
                <section className={styles.top_section}>
                    <img src={headshot} alt="Profile Picture" className={styles.profile_photo}></img>
                    <h1>Riley Tate</h1>
                    <ul className={styles.multi_column_list}>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                    </ul>
                </section>
                
            </section>
        </>
    )
}

export default Hero