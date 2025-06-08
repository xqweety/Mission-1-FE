import BoxRegis from '../components/RegisComponent/Regist';
import ChillLogo from '../image/logoChill.png';
import RegistBackground from '../image/registImage/registBackground.jpg';

const RegistPages = () => {
    return (
            <BoxRegis
            ImageLogoChill={ChillLogo}
            ImageRegistBackground={RegistBackground}
            />
    )
}

export default RegistPages;