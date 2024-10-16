import React from 'react'
import sideMenuStyles from '../style/SideMenu.module.css';
import { Link } from 'react-router-dom';
import BgImg from '../assets/img/side-menu-img.png'

const SideMenu = ({ sideMenu }) => {
    return (
        <div className={sideMenuStyles.menu} ref={sideMenu}>
            <div className={sideMenuStyles.menuContainer}>
                <div>
                    <p>노무법인 이음</p>
                    <ul>
                        <li><Link to='/intro'>인사말</Link></li>
                    </ul>
                </div>
                <div>
                    <p>사업자</p>
                    <ul>
                        <li><Link to='/business'>사업자 서비스</Link></li>
                        <li><Link to='/business/advisory'>기업자문</Link></li>
                        <li><Link to='/business/payroll'>급여관리</Link></li>
                        <li><Link to='/business/hr'>HR컨설팅</Link></li>
                        <li><Link to='/business/ir'>IR컨설팅</Link></li>
                        <li><Link to='/business/edu'>강의 및 교육</Link></li>
                    </ul>
                </div>
                <div>
                    <p>근로자</p>
                    <ul>
                        <li><Link to='/employee'>근로자 서비스</Link></li>
                        <li><Link to='/employee/wages'>임금체불/대지급금</Link></li>
                        <li><Link to='/employee/dismissal'>부당해고/징계</Link></li>
                        <li><Link to='/employee/harassment'>직장 내 괴롭힘</Link></li>
                        <li><Link to='/employee/injury'>산업재해</Link></li>
                    </ul>
                </div>
            </div>
            <img src={BgImg} alt='' />
        </div>
    )
}

export default SideMenu