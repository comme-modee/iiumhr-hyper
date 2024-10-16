import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/img/logo.png'
import navbarStyles from '../style/Navbar.module.css';
import headerStyles from '../style/Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';

const Header = ({ type }) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
    const sideMenu = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        sideMenu.current.style.right = isSideMenuOpen ? '0' : '-200%';
    }, [isSideMenuOpen]);

    useEffect(() => {
        setIsSideMenuOpen(false);
    }, [location])

    return (
        <React.Fragment>
            <div className={headerStyles[type === 'main' ? 'mainHeader' : 'header']}>
                <SideMenu sideMenu={sideMenu} />
                <img src={Logo} alt='로고' width={type === 'main' ? 120 : 100} onClick={() => navigate('/')} />
                <div className={navbarStyles.menuBtn}
                    onClick={() => {
                        setIsMenuBtnClicked(true);
                        setIsSideMenuOpen(prev => !prev);
                    }}
                >
                    <span className={
                        isMenuBtnClicked && isSideMenuOpen ? navbarStyles.menuBtn1 :
                            isMenuBtnClicked && !isSideMenuOpen ? navbarStyles.menuBtn1Reverse : ''
                    }></span>
                    <span className={
                        isMenuBtnClicked && isSideMenuOpen ? navbarStyles.menuBtn2 :
                            isMenuBtnClicked && !isSideMenuOpen ? navbarStyles.menuBtn2Reverse : ''
                    }></span>
                    <span className={
                        isMenuBtnClicked && isSideMenuOpen ? navbarStyles.menuBtn3 :
                            isMenuBtnClicked && !isSideMenuOpen ? navbarStyles.menuBtn3Reverse : ''
                    }></span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header