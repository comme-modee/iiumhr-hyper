import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from '../../style/videoMain/Main1.module.css';
import commonStyles from '../../style/Common.module.css';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/video/video-4.mp4'

const Main1 = () => {
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
        <div className={classNames(styles.mainContainer, commonStyles.flexCenter)}>
            <div className={styles.titleContainer}>
                <div className={styles.sub}>
                    사업자와 근로자 <span>모두를 위한</span>
                </div>
                <div className={styles.main}>
                    노무법인 <span className={styles.yellow}>이음</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
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
            <div className={styles.guideText}>원하시는 서비스를 선택해 주세요.</div>
            <div className={styles.dimmed}></div>
            <video
                loop
                autoPlay
                muted
                playsInline //영상이 사진처럼 글 안에서 재생되게끔 하는 속성. 안하면 페이지 로드시 영상이 자동으로 전체 모드가 된다.
                preload="metadata"
                // poster={MainPoster}
                className={styles.mainVideo}
            >
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    );
}

export default Main1;
