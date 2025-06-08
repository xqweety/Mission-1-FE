import "../../style/cardStyle.css"

const Card3 = (props) => {
    return (
    <div id='cardContainer'>
        <h3>Film Trending</h3>
        <div id='cardContentContainer'>
            <span><img src={props.ImageTheTomorrowWar}></img></span>
            <span><img src={props.ImageQuantumania}></img></span>
            <span><img src={props.ImageGuardianOfTheGalaxy}></img></span>
            <span><img src={props.ImageAManCalledOtto2}></img></span>
            <span><img src={props.ImageLittleMermaid}></img></span>
        </div>
    </div>
    )
}

export default Card3;