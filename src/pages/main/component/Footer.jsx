import React from 'react'
import BlogBtn from '../assets/img/footer-blog-btn.png'
import Logo from '../assets/img/logo-y.png'
import footerStyles from '../style/Footer.module.css'
import commonStyles from '../style/Common.module.css';

const Footer = ({ type }) => {
    const isMainFooter = type === 'main';

    return (
        isMainFooter ? (
            <div className={footerStyles.mainFooter} aria-label="회사 정보">
                주소 : 경기도 고양시 일산동구 정발산로24, 3동 512호, 513호 (장항동, 웨스턴타워)｜사업자 등록 번호 : 484-88-00754｜상호 : 노무법인 이음｜대표자명 : 가희진｜전화번호 : 031-966-9674~5｜팩스번호 : 031-688-8983｜COPYRIGHT (c) 2017 iiumhr.kr.all rights reserved.
            </div>
        ) : (
            <footer className={commonStyles.flexCenter}>
                <div className={footerStyles.info}>
                    <p>
                        주소 : 경기도 고양시 일산동구 정발산로24, 3동 512호, 513호 (장항동, 웨스턴타워)｜사업자 등록 번호 : 484-88-00754｜상호 :  노무법인 이음｜대표자명 : 가희진<br />
                        전화번호 : 031-966-9674~5 ｜팩스번호 : 031-688-8983 ｜COPYRIGHT (c) 2017 iiumhr.kr.all rights reserved.
                    </p>
                    <img src={Logo} alt='로고 이미지' width={80} />
                    <img src={BlogBtn} alt='대표 블로그 바로가기' width={120} />
                </div>
            </footer>
        )


    )
}

export default Footer