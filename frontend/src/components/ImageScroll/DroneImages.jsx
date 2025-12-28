import styles from "./ImageScroll.module.css"
import ExplainingToStudent from "../../images/ExplainingToStudent.jpg"
import DroneCloseUp from "../../images/DroneCloseUp.jpeg"
import DroneThroughHoops from "../../images/DroneThroughHoops.jpg"
import HelpingStudents from "../../images/HelpingStudents.jpg"
import ImageCarousel from "./image-carousel"

const carouselImages = [
    { src: ExplainingToStudent, description: 'Helping Student at DroneBlocks 2.0' },
    { src: DroneCloseUp, description: 'Drone' },
    { src: DroneThroughHoops, description: 'Student Manuvering Drone Through Hoops' },
    { src: HelpingStudents, description: 'Helping Students with Their Coding' }
]


function DroneImages () {

    return (
    <div>
        <ImageCarousel images={carouselImages} interval={4000} />
    </div>
  )
}

export default DroneImages;