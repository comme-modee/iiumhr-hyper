import React from 'react'
import { useState } from 'react';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import classNames from 'classnames'
import { motion } from 'framer-motion';

//css
import styles from '../../style/business/BusinessService.module.css'
import commonStyles from '../../style/Common.module.css'

//component
import GoToDetailPageBtn from '../../component/GoToDetailPageBtn';
import Map from '../../component/Map';
import Footer from '../../component/Footer';
import Contact from '../../component/Contact';
import ScrollToTopBtn from '../../component/ScrollToTopBtn';

//images
import categoryImg1 from '../../assets/img/business/service003.png'
import categoryImg2 from '../../assets/img/business/service004.png'
import categoryImg3 from '../../assets/img/business/service005.png'
import categoryImg4 from '../../assets/img/business/service006.png'
import categoryImg5 from '../../assets/img/business/service007.png'

const BusinessService = () => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ isOpenPrivacyPolicy, setIsOpenPrivacyPolicy ] = useState(false);

    return (
        <React.Fragment>
            <ScrollToTopBtn setActiveIndex={setActiveIndex}/>
            <FullpageContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                allowScroll={!isOpenPrivacyPolicy}
                transitionDuration={1000}
            >
                <FullpageSection>
                    <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                        <div className={styles.title}>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.5
                                }}
                            >
                                <span>사업자</span> 분들께 <span>노무법인 이음</span>은
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.5,
                                    delay: 0.1
                                }}
                            >
                                <span>‘최고의 파트너’</span> 입니다.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.5,
                                delay: 0.2
                            }}
                            className={styles.description}
                        >
                            근로계약서 작성과 취업규칙 등 기본이 되는 인사관리 업무부터<span className={styles.lineBreak}> </span>
                            노동부 신고 대응 및 산재 처리등의 노동 사건을 함께 해결해 나아가는 파트너로서 최선을 다합니다.
                        </motion.div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className={classNames(styles.sec2, commonStyles.flexCenter)}>
                        <span className={styles.quotes}>“</span>
                        <p className={styles.title}>
                            노무법인과 협업은<span className={styles.lineBreak1}> </span>
                            이제 선택 사항이 아닌,<span className={styles.lineBreak2}> </span>필수 사항입니다.
                        </p>
                        <p className={styles.description}>
                            지금까지 힘들게 했던 모든 노사 문제들을<span className={styles.lineBreak3}> </span>
                            노무법인 이음과 함께 해결 하시길 바랍니다.
                        </p>
                        <span className={styles.quotes}>”</span>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                        <div className={classNames(styles.sec3top, commonStyles.flexCenter)}>
                            <div className={commonStyles.layout1200}>
                                <p className={styles.title}>
                                    노무법인 이음은 최고의 파트너입니다.
                                </p>
                                <p className={styles.description}>
                                    전문적인 지식과 다양한 실무경험을 보유하고 있는 노무법인 이음의 강력한 맨파워
                                </p>
                                <div className={styles.category}>
                                    <div>
                                        <div className={styles.img}>
                                            <img src={categoryImg1} alt=''/>
                                        </div>
                                        <div className={styles.content}>
                                            <p>기업자문</p>
                                            <p>
                                                기업의 노무 관리<span className={styles.lineBreak}> </span>
                                                역량을 강화하여<span className={styles.lineBreak}> </span>
                                                안정적인 사업 운영을<span className={styles.lineBreak}> </span>
                                                도와 드립니다.
                                            </p>
                                            <GoToDetailPageBtn url={'/business/advisory'} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.img}>
                                            <img src={categoryImg2} alt=''/>
                                        </div>
                                        <div className={styles.content}>
                                            <p>급여관리</p>
                                            <p>
                                                기업 내 인사, 회계팀에서<span className={styles.lineBreak}> </span>
                                                직접 운영하는 급여 업무를<span className={styles.lineBreak}> </span>
                                                위탁 운영합니다.
                                            </p>
                                            <GoToDetailPageBtn url={'/business/payroll'} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.img}>
                                            <img src={categoryImg3} alt=''/>
                                        </div>
                                        <div className={styles.content}>
                                            <p>HR 컨설팅</p>
                                            <p>
                                                체계적인 프로세스를<span className={styles.lineBreak}> </span>
                                                기반으로 효율적인<span className={styles.lineBreak}> </span>
                                                서비스를 제공 합니다.
                                            </p>
                                            <GoToDetailPageBtn url={'/business/hr'} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.img}>
                                            <img src={categoryImg4} alt=''/>
                                        </div>
                                        <div className={styles.content}>
                                            <p>IR 컨설팅</p>
                                            <p>
                                                상호 원만한 협력을<span className={styles.lineBreak}> </span>
                                                이끌어 낼 수 있는<span className={styles.lineBreak}> </span>
                                                최적의 프로그램을<span className={styles.lineBreak}> </span>
                                                제시하고 있습니다.
                                            </p>
                                            <GoToDetailPageBtn url={'/business/ir'} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.img}>
                                            <img src={categoryImg5} alt=''/>
                                        </div>
                                        <div className={styles.content}>
                                            <p>강의 및 교육</p>
                                            <p>
                                                실전에서 바로 적용하고<span className={styles.lineBreak}> </span>
                                                사용 가능한 실무형 강의 및<span className={styles.lineBreak}> </span>
                                                교육을 진행합니다.
                                            </p>
                                            <GoToDetailPageBtn url={'/business/edu'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classNames(styles.sec3bottom, commonStyles.flexCenter)}>
                            <div className={commonStyles.layout1200}>
                                <div className={commonStyles.flexCenter}>
                                    <div className={styles.img}></div>
                                    <div className={styles.content}>
                                        다수 쟁점에서 수백건 이상<br />
                                        노동사건 대응 및 해결
                                    </div>
                                </div>
                                <div className={commonStyles.flexCenter}>
                                    <div className={styles.img}></div>
                                    <div className={styles.content}>
                                        다양한 사업영역에서의<br />
                                        HR, IR컨설팅 경험
                                    </div>
                                </div>
                                <div className={commonStyles.flexCenter}>
                                    <div className={styles.img}></div>
                                    <div className={styles.content}>
                                        노사 분쟁의 사전적<br />
                                        예방업무 수행 및 해결
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                        <div className={commonStyles.layout1200}>
                            <p className={styles.title}>
                                노무법인 이음이 <span>약속</span> 드립니다.
                            </p>
                            <p className={styles.description}>
                                대표 노무사가 신속하게 <span>직</span><span>접</span> 처리하고 끝까지 책임지겠습니다.
                            </p>
                            <p className={styles.bold}>[ 믿음이 가는 세 가지 약속 ]</p>
                            <div className={styles.content}>
                                <div>
                                    <div className={styles.img}></div>
                                    <p>
                                        파트너노무사<br />
                                        직접처리, 대응
                                    </p>
                                </div>
                                <div>
                                    <div className={styles.img}></div>
                                    <p>
                                        지연 없는<br />
                                        신속한 업무 처리
                                    </p>
                                </div>
                                <div>
                                    <div className={styles.img}></div>
                                    <p>
                                        합리적인 대안 제시형<br />
                                        노무자문
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className={classNames(styles.sec5, commonStyles.flexCenter)}>
                        <Contact 
                            type={'business'}
                            isOpenPrivacyPolicy={isOpenPrivacyPolicy}
                            setIsOpenPrivacyPolicy={setIsOpenPrivacyPolicy}
                        />
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className={classNames(styles.sec6)}>
                        <Map/>
                        <Footer/>
                    </div>
                </FullpageSection>
            </FullpageContainer>
        </React.Fragment>
    )
}

export default BusinessService