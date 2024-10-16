import React from 'react'
import { useState } from 'react';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import classNames from 'classnames'

//css
import styles from '../../style/employee/EmployeeService.module.css'
import commonStyles from '../../style/Common.module.css'

//images
import img from '../../assets/img/employee/service002.png'
import categoryImg1 from '../../assets/img/employee/service004.png'
import categoryImg2 from '../../assets/img/employee/service005.png'
import categoryImg3 from '../../assets/img/employee/service006.png'
import categoryImg4 from '../../assets/img/employee/service007.png'

//component
import GoToDetailPageBtn from '../../component/GoToDetailPageBtn';
import Map from '../../component/Map';
import Footer from '../../component/Footer';
import Contact from '../../component/Contact';

const EmployeeService = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <FullpageContainer
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            <FullpageSection>
                <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                    <p className={styles.title}>
                        직장에서 겪은 <span>억울함</span>은 <span>이음이 풀어 드립니다.</span><br />
                        임금체불 ｜ 부당해고 ｜ 대지급금 ｜ 부당 노동행위 등
                    </p>
                    <p className={styles.description}>
                        일하면서 누구나 겪을 수 있는 억울한 일, 노무법인 이음은 부당하게 당한 억울함을<br />
                        여러분 곁에 서서 함께 헤쳐 나갈 해결사입니다.
                    </p>
                </div>
            </FullpageSection>
            <FullpageSection>
                <div className={classNames(styles.sec2, commonStyles.flexCenter)}>
                    <div className={commonStyles.layout}>
                        <div className={classNames(styles.title, commonStyles.flexCenter)}>
                            <p className={styles.quotes}>“</p>
                            <p>
                                <span>여러분의 가치를 소중하게 보호</span>하는<br />
                                노무법인 이음과 함께 하시길 바랍니다.
                            </p>
                            <p className={styles.quotes}>”</p>
                        </div>
                        <div className={styles.img}>
                            <img src={img} alt='' width={420} />
                        </div>
                    </div>
                </div>
            </FullpageSection>
            <FullpageSection>
                <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                    <div className={commonStyles.layout}>
                        <p className={styles.description}>
                            일하면서 겪은 여러분의 억울함
                        </p>
                        <p className={styles.title}>
                            노무법인 이음이 풀어 드립니다.
                        </p>
                        <div className={styles.category}>
                            <div>
                                <div className={styles.img}>
                                    <img src={categoryImg1} alt=''/>
                                </div>
                                <div className={styles.content}>
                                    <p>임금체불·대지급금</p>
                                    <p>
                                        임금을 제대로 받지 못했을 때<br />
                                        법과 제도적으로 받을 수 있습니다.
                                    </p>
                                    <GoToDetailPageBtn url={'/employee/wages'} />
                                </div>
                            </div>
                            <div>
                                <div className={styles.img}>
                                    <img src={categoryImg2} alt=''/>
                                </div>
                                <div className={styles.content}>
                                    <p>부당해고·징계</p>
                                    <p>
                                        정당한 이유 없는 부당한 인사 관리<br />
                                        구제 신청을 통해 회복할 수 있습니다.
                                    </p>
                                    <GoToDetailPageBtn url={'/employee/dismissal'} />
                                </div>
                            </div>
                            <div>
                                <div className={styles.img}>
                                    <img src={categoryImg3} alt=''/>
                                </div>
                                <div className={styles.content}>
                                    <p>직장 내 괴롭힘</p>
                                    <p>
                                        괴롭힘, 따돌림, 성희롱 등을 당했을 때<br />
                                        기본 권리를 스스로 지켜야 합니다.
                                    </p>
                                    <GoToDetailPageBtn url={'/employee/harassment'} />
                                </div>
                            </div>
                            <div>
                                <div className={styles.img}>
                                    <img src={categoryImg4} alt=''/>
                                </div>
                                <div className={styles.content}>
                                    <p>산업 재해</p>
                                    <p>
                                        일하다 얻은 신체적인 손상에 대한 보상<br />
                                        받을 수 있게 도와 드립니다.
                                    </p>
                                    <GoToDetailPageBtn url={'/employee/injury'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FullpageSection>
            <FullpageSection>
                <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                    <Contact/>
                </div>
            </FullpageSection>
            <FullpageSection>
                <div className={classNames(styles.sec5)}>
                    <Map/>
                    <Footer/>
                </div>
            </FullpageSection>
        </FullpageContainer>
    );
}

export default EmployeeService