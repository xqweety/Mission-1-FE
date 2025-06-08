import BoxLogin from '../components/LoginComponents/Login';
import ChillLogo from '../image/logoChill.png';
import LoginBackground from '../image/loginImage/loginBackground.jpg';

const LoginPages = () => {
    return (
        <BoxLogin
        ImageLogoChill={ChillLogo}
        ImageBackgroundLogin={LoginBackground}
        />
    )
}

export default LoginPages;