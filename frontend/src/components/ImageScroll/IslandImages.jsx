import ImageCarousel from "./image-carousel";
import gameMap from "../../images/IS_GameMap.png";
import mount from "../../images/IS_Mountains.png";
import sceneWithLogos from "../../images/IslandSongSceneWithLogos.png";

const carouselImages = [
    { src: sceneWithLogos, description: 'Island Song, created by Crustacean works' },
    { src: gameMap, description: 'The current map for our game - an island split into 5 sections' },
    { src: mount, description: 'Mountain with glowing crystals inside - home of one of our puzzles' },
]


function IslandImages () {

    return (
    <div>
        <ImageCarousel images={carouselImages} interval={6000} />
    </div>
  )
}

export default IslandImages;