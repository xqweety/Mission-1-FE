import "../../style/cardStyle.css"

const Card2 = (props) => {
    return (
    <div id='cardContainer'>
        <h3>Top Rating Film dan Series Hari Ini</h3>
        <div id='cardContentContainer'>
            <span><img src={props.ImageSuzume}></img></span>
            <span><img src={props.ImageJurassicWorld}></img></span>
            <span><img src={props.ImageAllOfUsAreDead2}></img></span>
            <span><img src={props.ImageSonic}></img></span>
            <span><img src={props.ImageBigHero}></img></span>
        </div>
    </div>
    )
}

export default Card2;