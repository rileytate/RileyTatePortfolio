import ProjectSection from "./ProjectSection";
import BIPImages from "../ImageScroll/BIPImages";

function BIP () {

    return (
        <ProjectSection projectTitle="Billards Information Provider">
            <h2>What is the Billards Information Provider?</h2>
            <p>
                The Billards Information Provider (BIP), was 
                a website created during my Full Stack Web 
                Developement course. I worked with two other
                students on this project. One of my group 
                members was a member of the American Pool 
                Association (APA), and wanted our help to 
                create a website to help match planning.
            </p>
            <p>
                Our website displayed the rankings of all the 
                teams in the local league. Additionally, you 
                could view the stats of any player or team. 
                The important part about our website, is it 
                helps you see all the possible combinations 
                of people that a team can put up. 
            </p>
            <p>
                For this project, I was the main frontend designer,
                and I also worked with the log-in and authentication
                for the website. Whenever someone logged in who was 
                on a team in the league, their team's stats automatically 
                popped up when viewing "View Teams".
            </p>
            <p>
                This website is no longer deployed, and its 
                Docker database is no longer in use, so you 
                cannot access the site or get any information 
                from the backend, which is why there are no teams in the 
                rankings.
            </p>
            <BIPImages />
        </ProjectSection>
    )
}

export default BIP