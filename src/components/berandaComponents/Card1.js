import "../../style/cardStyle.css"

const Card1 = (props) => {
    return (
    <div id='cardContainer'>
    <h3>Melanjutkan Tonton Film</h3>
        <div id='cardContentContainer'>
            <span><img src={props.ImageDontLookUp}></img></span>
            <span><img src={props.ImageAllOfUsAreDead}></img></span>
            <span><img src={props.ImageBlueLock}></img></span>
            <span><img src={props.ImageAManCalledOtto}></img></span>
        </div>
    </div>
    )
}

export default Card1;