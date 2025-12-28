import ImageCarousel from "./image-carousel";
import hedgehog from "../../images/hedgehog.jpg";
import climb from "../../images/Top50_Climbing.jpg";
import boulder from "../../images/bouldering.jpg"; 
import donut from "../../images/donut.jpg";
import cupcakes from "../../images/cupcakes.jpg";
import sushi from "../../images/sushi.jpg";


const carouselImages = [
    { src: climb, description: 'Climbing' },
    { src: boulder, description: 'Me bouldering' },
    { src: hedgehog, description: 'Crochet Hedgehog I made' },
    { src: donut, description: 'Crochet donut I made' },
    { src: cupcakes, description: 'Cupcakes that I made' },
    { src: sushi, description: 'Sushi I made' },
]


function InterestImages () {

    return (
    <div>
        <ImageCarousel images={carouselImages} interval={6000} />
    </div>
  )
}

export default InterestImages;