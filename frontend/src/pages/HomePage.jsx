import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HomeCards from "../components/HomeCards/HomeCards";

function HomePage () {

    return (
        <>
            <NavBar />
            <h1>Hi! I'm Riley Tate!</h1>
            <p>
                Welcome to my site! Click on any of the cards below
                or words at the top of the screen to learn more about me!
            </p>
            <HomeCards />
        
            <Footer />
        </>
    )
}

export default HomePage;