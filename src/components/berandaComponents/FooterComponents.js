import "../../style/footerStyle.css";

const Footer = (props) => {
        const getColor = (item) => {
        if (props.hoveredItem && props.activeItem === item && props.hoveredItem !== item) {
            return 'rgba(255, 255, 255, 1)'
        }
        if (props.hoveredItem === item){
            return 'rgba(15, 30, 147, 1)'
        }
        if (props.activeItem === item) {
            return 'rgba(15, 30, 147, 1)'
        }
        return 'rgba(255, 255, 255, 1)';
    }
    return(
        <footer id="footerWrap">
            <div id='leftArea'>
                <span><img src={props.ImageLogoChill} alt="ImageLogoChill" className="ImageLogoChill"></img></span>
                    <br></br>
                <span>@2023 Chill All Right Reserved</span>
            </div>
            <div id="genreSection">
            <h6>Genre <img src={props.ImageArrowRight} className="arrowRight" /></h6>
            <span class="action"><a href ="">Aksi</a></span> 
            <span class="drama"><a href ="">Drama</a></span>
            <span class="comedy"><a href ="">Komedi</a></span>
            <span class="sains"><a href ="">Sains & Alam</a></span>
            <span class="child"><a href ="">Anak-anak</a></span>
            <span class="fantasy"><a href ="">Fantasi Ilmiah & Fantasi</a></span>
            <span class="adventure"><a href ="">Petualangan</a></span>
            <span class="thriller"><a href ="">Thriller</a></span>
            <span class="anime"><a href ="">Anime</a></span>
            <span class="crime"><a href ="">Kejahatan</a></span>
            <span class="war"><a href ="">Perang</a></span>
            <span class="britain"><a href ="">Britania</a></span>
            <span class="kdrama"><a href ="">KDrama</a></span>
            <span class="romance"><a href ="">Romantis</a></span>
            </div>
            <div id="helpSection">
            <h6>Bantuan<img src={props.ImageArrowRight} className="arrowRight" /></h6>
            <span class="contact"><a href ="">Kontak Kami</a></span>
            <span class="privacy"><a href ="">Privasi</a></span>
            <span class="condition"><a href ="">Syarat & Ketentuan</a></span>
            </div>
            
        </footer>
    )
};

export default Footer;