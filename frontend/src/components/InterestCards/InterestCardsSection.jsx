import InterestsContext from "./InterestsContext"
import InterestCard from "./InterestCard"
import { useState, useContext } from "react"
import styles from "./interestCard.module.css"
import hedgehog from "../../images/hedgehog.jpg";
import xc_finish from "../../images/RileyTate_3rdXC.jpg";

function InterestCardsSection () {
    const [cards] = useState([
        {
            title: "Running",
            description: `I am a division 1 three sport
                athlete, participating in cross country, 
                indoor, and outdoor track and field. During
                my collegiate career, I have had many all 
                league finishes. I have been All-League 
                Honorable mention three times, All-League
                second team three times, and All-League first
                team twice. I really enjoy running and find
                that it is a good way to releave stress.`,
            image: {xc_finish}
        },
        {
            title: "Crochet",
            description: `Over the past couple of years, I
                have begun to crochet. I mostly make amigurumi
                (stuffed animals) for my friends and family. I've
                always like arts and crafts, so this was a good 
                way for me to create something with that passion`,
            image: {hedgehog}
        },
        {
            title: "Climbing",
            description: `I am not an experienced climber by
                any means, but everytime I have been climbing, 
                I have really enjoyed it. Once my collegiate
                eligibility runs out, I plan on climbing some
                more. I like climbing with the rope, but I plan
                to focus on bouldering`,
            image: ""
        }
    ]);

    return (
        <>
            <section className={styles.card_section}>
                {cards.map((card, index) => (
                    <InterestCard id={index} card={card} />
                ))}
            </section>
        </>
    )
}

export default InterestCardsSection