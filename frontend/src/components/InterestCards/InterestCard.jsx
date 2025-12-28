import styles from "./interestCard.module.css"

const InterestCard = ({id, card}) => {

    return (
        <>
            <section className={styles.interest_card}>
                <h1>{card.title}</h1>
                <hr />
                <p>{card.description}</p>
                <img src={card.image} alt="image" />
            </section>
        </>
    )
}

export default InterestCard