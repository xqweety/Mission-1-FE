import "../../style/navigationBarStyle.css";
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
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
    return (
        <nav id="navbarContainer">
            <div id='containerNavigationMenu'>
                <span id='logoNavigationBar1'><img src={props.ImageLogoChill}/></span>
                <span id='logoNavigationBar2'><img src={props.ImageLogoChill2}/></span>
                <span className="list">
                    <a 
                    href='' 
                    style={{color:getColor('Series'),cursor:'pointer'}}
                    onMouseEnter={()=>props.onMouseHover('Series')}
                    onMouseLeave={props.onMouseOut}
                    onClick={(e)=>{
                        e.preventDefault();
                        props.onClick('Series')}}
                    >
                        {props.Series}
                    </a>
                </span>
                <span className="list">
                    <a
                    href=''
                    style={{color:getColor('Film'),cursor:'pointer'}}
                    onMouseEnter={()=>props.onMouseHover('Film')}
                    onMouseLeave={props.onMouseOut}
                    onClick={(e)=>{
                        e.preventDefault();
                        props.onClick('Film')}}
                    >
                        {props.Film}
                    </a>
                </span>
                <span className="list">
                    <a 
                    href=''
                    style={{color:getColor('DaftarSaya'),cursor:'pointer'}}
                    onMouseEnter={()=>props.onMouseHover('DaftarSaya')}
                    onMouseLeave={props.onMouseOut}
                    onClick={(e)=>{
                        e.preventDefault();
                        props.onClick('DaftarSaya')}}
                    >
                        {props.DaftarSaya}
                    </a>
                </span>
            </div>
            <ul id='menuNavigationBar'>
                <li>
                    <div
                        style={{display: 'inline-flex',alignItems:'center',cursor:'pointer'}}
                        onClick={props.dropDownMenu}
                    >
                        <img src={props.ImageIconProfile} id='iconProfile'></img>
                        <img src={props.ImageArrowDown} id='arrowDown'
                            style={{transform: props.isDropDownMenuOpen? 'rotate(180deg)':'rotate(0deg',
                            transition:'transform .3s ease'
                            }}
                        >

                        </img>
                    </div>
                    {props.isDropDownMenuOpen &&(
                    <ul id='subMenu'>
                        <li className="listSubMenu">
                            <img src={props.ImageMyProfile} id='myProfile' width='16' height='16' alt='myProfile'/>
                            <a 
                            href=''
                            style={{color:getColor('Profil'),cursor:'pointer'}}
                            onMouseEnter={()=>props.onMouseHover('Profil')}
                            onMouseLeave={props.onMouseOut}
                            >
                                {props.Profil}
                            </a>
                        </li>
                        <li className="listSubMenu">
                            <img src={props.ImageStarIcon} id='starIcon' width='16' height='16' alt='starIcon'/>
                            <a 
                            href=''
                            style={{color:getColor('Premium'),cursor:'pointer'}}
                            onMouseEnter={()=>props.onMouseHover('Premium')}
                            onMouseLeave={props.onMouseOut}
                            >
                                {props.Premium}
                            </a>
                        </li>
                        <li className="listSubMenu">
                            <img src={props.ImageLogOut} id='logOut' width='16' height='16' alt='logOut'/>
                            <Link
                            to='/'
                            style={{color:getColor('Keluar'),cursor:'pointer'}}
                            onMouseEnter={()=>props.onMouseHover('Keluar')}
                            onMouseLeave={props.onMouseOut}
                            >
                                {props.Keluar}
                            </Link>
                        </li>
                    </ul>
                    )}
                </li>
            </ul>
        </nav>
    )
};

export default NavigationBar;