import ImageCarousel from "./image-carousel";
import home from "../../images/BIP_Home.png";
import login from "../../images/BIP_Login.png";

const carouselImages = [
    { src: home, description: 'Home page for BIP website' },
    { src: login, description: 'Login page for BIP website' },
]


function BIPImages () {

    return (
    <div>
        <ImageCarousel images={carouselImages} interval={6000} />
    </div>
  )
}

export default BIPImages;