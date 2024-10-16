import React, { useEffect } from 'react';
import classNames from 'classnames';
import mainStyles from '../style/Main.module.css';
import commonStyles from '../style/Common.module.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const setVh = () => {
        let vh = 0;
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
        setVh();
    }, [])

    window.addEventListener('resize', () => {
        setVh();
    })

    return (
        <div className={classNames(mainStyles.bg, commonStyles.flexCenter)}>
            <div className={mainStyles.titleContainer}>
                <div className={mainStyles.sub}>
                    사업자와 근로자 <span>모두를 위한</span>
                </div>
                <div className={mainStyles.main}>
                    노무법인 <span className={mainStyles.yellow}>이음</span>
                </div>
            </div>
            <div className={mainStyles.buttonContainer}>
                <button
                    onClick={() => navigate('/business')}
                    aria-label="사업자 서비스로 이동"
                >
                    사업자 서비스
                </button>
                <button
                    onClick={() => navigate('/employee')}
                    aria-label="근로자 서비스로 이동"
                >
                    근로자 서비스
                </button>
            </div>
            <div className={mainStyles.guideText}>원하시는 서비스를 선택해 주세요.</div>
        </div>
    );
}

export default Main;
