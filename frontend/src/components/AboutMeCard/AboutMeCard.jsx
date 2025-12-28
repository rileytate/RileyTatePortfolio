import { useState } from "react";
import styles from "./aboutMeCard.module.css"
import profilePhoto from "../../images/ChapmanHeadshot.jpg";
import RunImages from "../ImageScroll/RunImages";
import InterestImages from "../ImageScroll/InterestImages";
import Top50 from "../../images/Top_50.JPG"

function AboutMeCard () {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const academics = () => {
        setTitle("Academics")
        setText(<>
        <ul>
            <li>Computer Science major</li>
            <li>Minor in Mathematics</li>
            <li>Six time member of the Horizon League All-Acedemic Team</li>
            <li>In PFW's Top 50 class of 2025 <a href="https://www.pfw.edu/top50/recipients">here!</a></li>
            <li>3.95 GPA</li>
        </ul>
        <img src={Top50} className={styles.image} alt="Top 50 Image" />
        </>)
    }

    const athletics = () => {
        setTitle("Athletics")
        setText(<>
            <p>I am a three-sport athlete at PFW, participating in 
                cross-country, indoor track, and outdoor track. 
                This means that I compete year-round and have to 
                balance school work with practice and traveling to 
                races. Throughout my athletic journey, I have had 
                many high finishes.  I really enjoy running and find 
                that it is a good way to releave stress.
            </p>
            <h2>Cross Country</h2>
            <p>
                In the cross country season, we race 5ks and 6ks. 
            </p>
            <ul>
                <li>Sophmore year - All-league second team, finishing 10th overall.</li>
                <li>Junior year - All-league first team, finishing 6th overall.</li>
                <li>Senior year - All-league first team, finishing 3rd overall.</li>
            </ul>
            <h2>Indoor Track and Field</h2>
            <ul>
                <li>Freshman year - All-league honorable mention, finishing 3rd in the Distance-Medley-Relay.</li>
                <li>Sophmore year - All-league second team, finishing 2nd in the 5k.</li>
                <li>Sophmore year - All-league honorable mention, finishing 3rd in the mile.</li>
                <li>Junior year - Podium finishes in the 5k (5th) and the 6k (6th).</li>
            </ul>
            <h2>Outdoor Track and Field</h2>
            <ul>
                <li>Freshman year - Podium finish in the 10k (7th).</li>
                <li>Sophmore year - All-league second team, finishing 2nd in the 10k.</li>
                <li>Sophmore year - Podium finish in the 5k (5th).</li>
                <li>Junior year - All-league honorable mention, finishing 3rd in the 5k.</li>
                <li>Junior year - Podium finish in the 10, finishing 4th in the 10k.</li>
            </ul>
            <RunImages />
        </>)
    }

    const chapman = () => {
        setTitle("Chapman Scholarship Program")
        setText(<>
            <p>
                I am a recieptent of the Chapman Scholarship. Six 
                incomming freshman are chosen to recieve this four-year 
                scholarship at PFW. Being a part of this program gives 
                a unique experience to learn about local organizations
                and faculty research. The scholarship encourages civic
                and community engagment, so I am an active member in my
                community. Learn more about the Chapman Scholarship 
                Program <a href="https://www.pfw.edu/summit-scholars/chapman-scholars">
                here</a>.
            </p>
        </>)
    }

    const volunteering = () => {
        setTitle("volunteering")
        setText("volunteering")
    }

    const interests = () => {
        setTitle("My Interests")
        setText(<>
            <p>
                Between school and running, I still find time to do 
                other things I enjoy. I enjoy rock climbing. I haven't 
                been that much, but I plan on doing it more once my 
                athletic eligibility runs out.
            </p> 
            <p>
                Over the past couple of years, I
                have begun to crochet. I mostly make amigurumi
                (stuffed animals) for my friends and family. I've
                always like arts and crafts, so this was a good 
                way for me to create something with that passion.
            </p>
            <p>
                Another thing I enjoy doing in my spare time is 
                cooking and baking. I like making things from 
                scratch and I love a sweet treat.
            </p>
            <InterestImages />
        </>)
    }

    const clear = () => {
        setText('');
        setTitle('');
    }

    return (
        <>
        <section className={styles.about_me_card}>
            <section className={styles.top_section}>
                <img className={styles.profile_photo} src={profilePhoto} alt="Profile Photo" />
                <section className={styles.right_section}>
                    <h1>Riley Tate</h1>
                    <p>
                        Hi! I'm Riley Tate! I am a senior 4+ 1 Computer Science
                        student at Purdue University Fort Wayne! I will graduate
                        with my Bachelor's degree Spring 2026, and will graduate 
                        with my Master's degree Spring 2027. I am also a three 
                        sport athelete competing year-round. Click the buttons 
                        below to learn more about me, my accomplishments, and my
                        interests!
                    </p>
                    <section className={styles.buttons}>
                        <button id="academics" onClick={academics}>Academics</button>
                        <button id="athletics" onClick={athletics}>Athletics</button>
                        <button id="chapman" onClick={chapman}>Chapman Scholarship</button>
                        {/* <button id="volunteering" onClick={volunteering}>Volunteering</button> */}
                        <button id="interests" onClick={interests}>Other Interests</button>
                        {title && <button onClick={clear}>Close Details</button>}
                    </section>
                </section> 
            </section>
            <hr />
            <section className={styles.details}>
                {title && 
                    <>
                    <h1>{title}</h1>
                    {text}
                    </>}
                {}
            </section>
        </section>
        
        </>
    )
}

export default AboutMeCard;