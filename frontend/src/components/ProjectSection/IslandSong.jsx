import ProjectSection from "./ProjectSection";
import IslandImages from "../ImageScroll/IslandImages";
import keysPuzzle from "../../videos/KeysPuzzle.mp4"

function IslandSong () {

    return (
        <ProjectSection projectTitle="Island Song">
            <h2>What is Island Song?</h2>
            <p>
                Island Song is a game development project 
                I am working on with 5 other students as 
                out senior capstone project. We are creating
                this game using Unreal Engine with Perforce 
                as our version control.
            </p>
            <IslandImages />
            <h2>Game Story</h2>
            <p>
                In the game of Island Song, you are a young kid
                who wakes up on a quiet, lifeless, greyscale island. 
                Your goal is to bring sound, life, and color back
                to the Island. You do this by completing puzzles 
                across the island.
            </p>
            <p>
                The island is split up into 5 different sections, 
                each section representing a different musical 
                instrament group. Within each section, there is a 
                puzzle. When the player completes the puzzle in a 
                section, that section gains its color and life back.
                When the player completes all 5 puzzles and brings 
                life back to the whole island, they win the game
            </p>
            <p>
                This is a two-semester long project and we just 
                finished our first semester. Right now, we have 
                our entire map and one puzzle completed.
            </p>
            <h2>My Contributions</h2>
            <p>
                I was designated as the lead puzzle designer
                for the project. Before we started working in 
                the world, I wrote out explainations and puzzle 
                designs for all 5 puzzles. Then, when we started
                working in the world, I worked on the blueprint 
                logic for our first puzzle. Our first puzzle is 
                pretty simple and plays like Simon Says, where 
                the player is shown a pattern and has to repeat 
                it.
            </p>
            <video src={keysPuzzle} controls>
                Your browser does not support video tags.
            </video>
        </ProjectSection>
    )
}

export default IslandSong;