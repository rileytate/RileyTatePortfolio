import ProjectSection from "./ProjectSection"
import DroneImages from "../ImageScroll/DroneImages"
import styles from "./projectSection.module.css"

function DroneBlocks () {

    return (
        <ProjectSection projectTitle="DroneBlocks Summer Camps">
            <h2>DroneBlocks 1.0</h2>
            <p>
                The DroneBlocks 1.0 summer camp is designed 
                to help middle school students gain programming 
                experience by working with drones. First, the 
                students learn how to program the drones using 
                block coding. As the week goes on, students are 
                introduced to Python. In both of these languages, 
                the students are taught basic programming concepts 
                such as variables, conditional logic, loops, and 
                functions. Additionally, the students are also 
                taught how to utilize the drone's sensors. Each day 
                the students are given certain tasks to complete with 
                the new skills they are taught. The camp ends with the 
                “Drone Olympics” on the final day of the camp. On this 
                day, the students are given 5 challenges to complete. 
                At the end of the final day, parents come and see what 
                their kids have learned.
            </p>
            <p>
                I have worked at this camp for three years, including 
                its initial year in the summer of 2023. Leading up to 
                the first camp, I worked along side another PFW student 
                to develop the curriculum from scratch. Prior to working 
                on the camp curriculum, I had no Python or drone knowledge 
                and had to teach myself. The experience I gained from working
                at this camp has helped me become a better learner and instructor.
            </p>

            <h2>DroneBlocks 2.0</h2>
            <p>
                At the DroneBlocks 2.0 summer camp, we spent a lot of 
                time exploring more advanced coding concepts and the 
                drone's vision capabilities. We went over 2D arrays, 
                which was helpful because the drones had an attachable 
                8x8 LED display. With this display and understanding 
                programming logic, some of the students were able to 
                create a Rock-Paper-Scissors game and a Connect-4 game 
                with their drone.
            </p>
            <p>
                Additionally, we started using OpenCV to show off the 
                drone's vision capabilities. The students were able to 
                make the drones detect colors and “ArUco Markers”. The 
                students programmed the drones to follow these images, 
                allowing autonomous flying.
            </p>
            <p>
                I have been a lead instructor at the DroneBlocks 2.0 
                camp for the two years it has been offered. This past 
                summer, I was the only instructor. Similarly to the 
                DroneBlocks 1.0 camp, I helped create the curriculum 
                from scratch. The growth that the students saw during 
                this camp was amazing to see. Students created a 
                competitive AI opponent in Connect-4, a drone that could 
                autonomously move in 3D space, and a connection that 
                allowed one computer to control multiple drones.
            </p>
            <section className={styles.display_section}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/schAhOXn18w?si=eAN01XVSziD-115t" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </section>

        </ProjectSection>
    )
}

export default DroneBlocks