import "../../style/cardStyle.css"

const Card4 = (props) => {
    return (
    <div id='cardContainer'>
        <h3>Rilis Baru</h3>
        <div id='cardContentContainer'>
            <span><img src={props.ImageLittleMermaid}></img></span>
            <span><img src={props.ImageDutyAfterSchool2}></img></span>
            <span><img src={props.ImageBigHero}></img></span>
            <span><img src={props.ImageAllOfUsAreDead2}></img></span>
            <span><img src={props.ImageMissing}></img></span>
        </div>
    </div>
    )
}

export default Card4;