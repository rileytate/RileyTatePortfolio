import NavBar from "../components/NavBar/NavBar";
import profilePhoto from "../images/ChapmanHeadshot.jpg";
import styles from "../styles/AboutMe.module.css"
import Footer from "../components/Footer/Footer";
import InterestCardsSection from "../components/InterestCards/InterestCardsSection";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";

function AboutMePage () {

    return (
        <>
            <NavBar />
            <AboutMeCard />
            <Footer />
        </>
    )
}

export default AboutMePage;