import React, { useState } from 'react';
import NavigationBar from '../components/berandaComponents/Navigationbar'
import Footer from '../components/berandaComponents/FooterComponents';
import Hero from '../components/berandaComponents/Hero';
import Card1 from '../components/berandaComponents/Card1';
import Card2 from '../components/berandaComponents/Card2';
import Card3 from '../components/berandaComponents/Card3';
import Card4 from '../components/berandaComponents/Card4';
import LogoChill from '../image/logoChill.png';
import LogoChill2 from '../image/logoChill2.png';
import IconProfile from '../image/iconProfile.png';
import ArrowDown from '../image/arrowDown.png';
import ArrowRight from '../image/arrowRight.png'
import MyProfile from '../image/myProfile.png';
import StarIcon from '../image/starIcon.png';
import LogOut from '../image/logOut.png';
import HeroBackground from '../image/heroBackground.png';

import DontLookUp from '../image/card1/dontLookUp.png';
import AllOfUsAreDead from '../image/card1/allOfUsAreDead.png';
import BlueLock from '../image/card1/blueLock.png';
import AManCalledOtto from '../image/card1/aManCalledOtto.png';

import Suzume from '../image/card2/suzume.png';
import JurassicWorld from '../image/card2/jurassicWorld.png';
import Sonic from '../image/card2/sonic.png';
import AllOfUsAreDead2 from '../image/card2/allOfUsAreDead2.png';
import BigHero from '../image/card2/bigHero.png';

import TheTomorrowWar from '../image/card3/theTomorrowWar.png';
import Quantumania from '../image/card3/quantumania.png';
import GuardianOfTheGalaxy from '../image/card3/guardianOfTheGalaxy.png';
import AManCalledOtto2 from '../image/card3/aManCalledOtto2.png';
import LittleMermaid from '../image/card3/littleMermaid.png';

import DutyAfterSchool2 from '../image/card4/dutyAfterSchool2.png';
import Missing from '../image/card4/missing.png';

const PagesBeranda = () => {
    // propsStart
    const logoChill = {src:LogoChill};
    const iconProfile = {src:IconProfile};
    const arrowDown = {src:ArrowDown};
    const myProfile = {src:MyProfile};
    const starIcon = {src:StarIcon};
    const logOut = {src:LogOut};
    const heroBackground = {src:HeroBackground};
    const series = 'Series';
    const film = 'Film';
    const daftarSaya = 'Daftar Saya';
    const profil = 'Profil Saya';
    const premium = 'Ubah Premium';
    const keluar = 'Keluar';

    const [activeItem, setActiveItem]= useState(null);
    const [hoveredItem, setHoveredItem]= useState(null);
    const onClick = (item) => {
        setActiveItem(item)
    };
    const onMouseHover = (item) => {
        setHoveredItem(item)
    };
    const onMouseOut = () => {
        setHoveredItem(null)
    }

    const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
    const dropDownMenu = () => {
        setIsDropDownMenuOpen(!isDropDownMenuOpen);
    }
    // propsEnd
return (
    <div id='container'>
        <NavigationBar
        ImageLogoChill={LogoChill}
        ImageLogoChill2={LogoChill2}
        Series={series}
        Film={film}
        DaftarSaya={daftarSaya} 
        ImageIconProfile={IconProfile}
        ImageArrowDown={ArrowDown}

        ImageMyProfile={MyProfile}
        Profil={profil}
        ImageStarIcon={StarIcon}
        Premium={premium}
        ImageLogOut={LogOut}
        Keluar={keluar}

        activeItem={activeItem}
        hoveredItem={hoveredItem}
        onClick={onClick}
        onMouseHover={onMouseHover}
        onMouseOut={onMouseOut}
        isDropDownMenuOpen={isDropDownMenuOpen}
        dropDownMenu={dropDownMenu}
        />
    
        <Hero
        heroBackground={HeroBackground}
        />

        <Card1
        ImageDontLookUp={DontLookUp}
        ImageAllOfUsAreDead={AllOfUsAreDead}
        ImageBlueLock={BlueLock}
        ImageAManCalledOtto={AManCalledOtto}
        />

        <Card2
        ImageSuzume={Suzume}
        ImageJurassicWorld={JurassicWorld}
        ImageAllOfUsAreDead2={AllOfUsAreDead2}
        ImageSonic={Sonic}
        ImageBigHero={BigHero}
        />

        <Card3
        ImageTheTomorrowWar={TheTomorrowWar}
        ImageQuantumania={Quantumania}
        ImageGuardianOfTheGalaxy={GuardianOfTheGalaxy}
        ImageAManCalledOtto2={AManCalledOtto2}
        ImageLittleMermaid={LittleMermaid}
        />

        <Card4
        ImageLittleMermaid={LittleMermaid}
        ImageDutyAfterSchool2={DutyAfterSchool2}
        ImageBigHero={BigHero}
        ImageAllOfUsAreDead2={AllOfUsAreDead2}
        ImageMissing={Missing}
        />

        <Footer
        ImageLogoChill={LogoChill}
        ImageArrowRight={ArrowRight}
        />
    </div>
    )
}

export default PagesBeranda;