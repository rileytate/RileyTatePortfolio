import ImageCarousel from "./image-carousel";
import Riley_3rdXC from "../../images/RileyTate_3rdXC.jpg";
import track from "../../images/RileyTrack.jpg";

const carouselImages = [
    { src: Riley_3rdXC, description: 'Finishing 3rd at Confrence meet' },
    { src: track, description: 'Running in the 5k' },
]


function RunImages () {

    return (
    <div>
        <ImageCarousel images={carouselImages} interval={6000} />
    </div>
  )
}

export default RunImages;