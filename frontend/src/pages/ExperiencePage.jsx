import NavBar from "../components/NavBar/NavBar";
import DroneBlocks from "../components/ProjectSection/DroneBlocks";
import Grading from "../components/ProjectSection/Grading";
import Research from "../components/ProjectSection/Research";
import Footer from "../components/Footer/Footer";

function ExperiencePage () {

    return (
        <>
            <NavBar />
            <h1>Experience</h1>
            <DroneBlocks />
            <Grading />
            {/* <Research /> */}
            <Footer />
        </>
    )
}

export default ExperiencePage;