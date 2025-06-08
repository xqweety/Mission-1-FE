import "../../style/heroStyle.css"

const Hero = (props) => {
    return (
        <div 
        id='heroContainer'
        style={{
            backgroundImage:`url(${props.heroBackground})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            height:'587px',
            width:'100%'
        }}>
            <div
            id='contentHero'>
                <h1 id='heading'>Duty After School</h1>
                <span id='description'>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            <br></br>
                Departemen Pertahanan mulai lebih banyak tentara,termasuk siswa 
            <br></br>
                sekolah menengah, Mereka pun segera menjadi pejuang garis depan dalam perang.
                </span>
            <br></br>
                <button id='startButton'>Mulai</button>
                <span id='inFull'>Selengkapnya</span>
                <span id='age'>18+</span>
            </div>
        </div>
    )
};

export default Hero;