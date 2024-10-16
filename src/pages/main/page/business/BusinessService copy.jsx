import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styles from '../../style/business/BusinessService.module.css'
import commonStyles from '../../style/Common.module.css'
import classNames from 'classnames'
import GoToDetailPageBtn from '../../component/GoToDetailPageBtn'
import Contact from '../../component/Contact'
import Map from '../../component/Map'
import Footer from '../../component/Footer'
import '../../style/fullpage.css'
import categoryImg1 from '../../assets/img/business/service003.png'
import categoryImg2 from '../../assets/img/business/service004.png'
import categoryImg3 from '../../assets/img/business/service005.png'
import categoryImg4 from '../../assets/img/business/service006.png'
import categoryImg5 from '../../assets/img/business/service007.png'

const BusinessService = () => {
    return (
        <ReactFullpage
            licenseKey={'gplv3-license'}
            scrollingSpeed={800}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div id='section-1' className={classNames('section', styles.sec1, commonStyles.flexCenter)}>
                            <p className={styles.title}>
                                <span>사업자</span> 분들께 <span>노무법인 이음</span>은 <span>‘최고의 파트너’</span> 입니다.
                            </p>
                            <p className={styles.description}>
                                근로계약서 작성과 취업규칙 등 기본이 되는 인사관리 업무부터<br />
                                노동부 신고 대응 및 산재 처리등의 노동 사건을 함께 해결해 나아가는 파트너로서 최선을 다합니다.
                            </p>
                        </div>
                        <div id='section-2' className={classNames('section', styles.sec2, commonStyles.flexCenter)}>
                            <span>“</span>
                            <p className={styles.title}>
                                노무법인과 협업은<br />
                                이제 선택 사항이 아닌, 필수 사항입니다.
                            </p>
                            <p className={styles.description}>
                                지금까지 힘들게 했던 모든 노사 문제들을<br />
                                노무법인 이음과 함께 해결 하시길 바랍니다.
                            </p>
                            <span>”</span>
                        </div>
                        <div id='section-3' className={classNames('section', styles.sec3)}> 
                            <div className={classNames(styles.sec3top, commonStyles.flexCenter)}>
                                <div className={commonStyles.layout}>
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
                                                    기업의 노무 관리<br />
                                                    역량을 강화하여<br />
                                                    안정적인 사업 운영을<br />
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
                                                    기업 내 인사, 회계팀에서<br />
                                                    직접 운영하는 급여 업무를<br />
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
                                                    체계적인 프로세스를<br />
                                                    기반으로 효율적인<br />
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
                                                    상호 원만한 협력을<br />
                                                    이끌어 낼 수 있는<br />
                                                    최적의 프로그램을<br />
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
                                                    실전에서 바로 적용하고<br />
                                                    사용 가능한 실무형 강의 및<br />
                                                    교육을 진행합니다.
                                                </p>
                                                <GoToDetailPageBtn url={'/business/edu'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classNames(styles.sec3bottom, commonStyles.flexCenter)}>
                                <div className={commonStyles.layout}>
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
                        <div id='section-4' className={classNames('section', styles.sec4)}>
                            <div className={commonStyles.layout}>
                                <p className={styles.title}>
                                    노무법인 이음이 <span>약속</span> 드립니다.
                                </p>
                                <p className={styles.description}>
                                    대표 노무사가 신속하게 직접 처리하고 끝까지 책임지겠습니다.
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
                        <div id='section-5' className={classNames('section', styles.sec5)}>
                            <Contact/>
                        </div>
                        <div id='section-6' className={classNames('section', styles.sec6)}>
                            <Map/>
                            <Footer/>
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default BusinessService