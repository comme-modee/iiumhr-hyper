import React from 'react'
import styles from '../style/Intro.module.css'
import commonStyles from '../style/Common.module.css'
import classNames from 'classnames'
import profileImg1 from '../assets/img/intro003.png'
import profileImg2 from '../assets/img/intro004.png'
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    대표님들께서는 오직 사업장의 성장에만 집중하시길 바랍니다.
                </p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1
                }}
                className={classNames(styles.sec2, commonStyles.flexCenter)}
            >
                <p>
                    안녕하십니까?<br />
                    노무법인 이음을 찾아주셔서 진심으로 감사드립니다.
                </p>
                <p>
                    노무법인 이음은 올바른 법원칙과 건전한 사회통념을 바탕으로 합리적인 노동관계업무를 지원함으로써<br />
                    공정한 사회를 구축하는데 이바지하는 것을 목적으로 설립된 노무법인입니다.
                </p>
                <p>
                    노동법률, 인사관리, 경영조직 등에 대한 체계적인 이해와 풍부한 경험을 바탕으로<br />
                    기업 자문, 컨설팅, 노동사건, 아웃소싱, 교육 등<br />
                    다양한 영역에서 합리적인 방안을 제시해드리는데 주안을 두고 있습니다.
                </p>
                <p>
                    귀 사의 지속적인 건전한 발전에 노무법인 이음이 힘이 되어 드리겠습니다.
                </p>
                <p>
                    감사합니다.
                </p>
            </motion.div>
            <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={commonStyles.layout}
                >
                    <div className={styles.profile}>
                        <div className={styles.img}>
                            <img src={profileImg1} alt='' />
                        </div>
                        <div className={styles.info}>
                            <p>대표 공인노무사 <span>가 희 진</span></p>
                            <p>경력 사항</p>
                            <ul>
                                <li>現 노무법인 이음 대표노무사</li>
                                <li>前 하이에치알노무법인 공인노무사</li>
                                <li>前 노무법인한우리 공인노무사</li>
                                <li>前 엘지생활건강 노경기획팀</li>
                                <li>의정부지방법원 고양지원 민사조정위원</li>
                                <li>연세의료원 연세사회복지재단, 여의도순복음교회 엘림복지회 사외이사</li>
                                <li>한국공인노무사회 대의원</li>
                                <li>경기도청 비정규직 노동법 교육 위촉 강사 </li>
                                <li>경기도교육청 도제교육 선도기업 인정 실사위원</li>
                                <li>근로복지공단 선진기업복지 컨설턴트</li>
                                <li>중소기업청 비즈니스지원단 컨설턴트</li>
                                <li>고용노동부 국선노무사, 근로조건 자율점검 수행노무사</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        <p>Ga Hee-jin Career</p>
                        <p>주요 커리어</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.careerContainer}
                    >
                        <p>
                            경기연구원 ｜ 경기중소기업종합지원센터 ｜ 그랜드코리아레저 ｜ 동국제약 ｜ 무림파워텍<br />
                            아주뉴스 ｜ 산업기술진흥원 ｜ 삼표기초소재 ｜ 서울연구원 ｜ 엘리시안 ｜ HR컨설팅
                        </p>
                        <div>
                            <p>
                                전북은행 ｜ 중소기업진흥공단 ｜ 한미약품<br />
                                엘지하이엔텍 ｜ 세종시 ｜ 코레일유통 ｜ 홍성군<br />
                                DGB생명 등 ｜ 다수기업 HR컨설팅 ｜ 가스공사<br />
                                가스기술공사 ｜ 산업기술진흥원<br />
                                수자원공사 등 ｜ 다수기업 IR컨설팅
                            </p>
                            <p>
                                농림수산검역검사본부 사내하도급 컨설팅<br />
                                고용노동부 60세+ 정년서포터즈<br />
                                임금피크제 컨설팅<br />
                                고용노동부 학교업무종사자의 노무관리<br />
                                실태 및 개선방안 연구용역 등
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={classNames(styles.sec5, commonStyles.flexCenter)}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={commonStyles.layout}
                >
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <p>파트너 공인노무사 <span>이 준 학</span></p>
                            <p>경력 사항</p>
                            <ul>
                                <li>現 노무법인 이음 파트너노무사</li>
                                <li>前 노무법인 아이앤컴퍼니 주임노무사</li>
                                <li>서울대학교 창업지원센터 멘토 및 노동법 강사</li>
                                <li>파주시 청소년 재단 인사전환심의위원회 위원</li>
                                <li>한국공인노무사회 위탁용역 수행 컨설턴트</li>
                                <li>경기도청 비정규직 노동법 교육 위촉 강사</li>
                                <li>경기도청 직장 내 괴롭힘 예방 교육 위촉 강사</li>
                                <li>고양시 청소년보호기관 자문위원</li>
                                <li>노사발전재단 일터혁신 컨설팅 컨설턴트</li>
                                <li>중소기업청 비지니스지원단 컨설턴트</li>
                                <li>고용노동부 근로조건 자율점검 수행노무사</li>
                            </ul>
                        </div>
                        <div className={styles.img}>
                            <img src={profileImg2} alt='' />
                        </div>
                    </div>
                    </motion.div>
            </div>
            <div className={classNames(styles.sec6, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        <p>Lee Junhak Career</p>
                        <p>주요 커리어</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.careerContainer}
                    >
                        <div>
                            <p>
                                쿠팡 ｜ 새마을금고 ｜ 코스콤 ｜ 튼튼영어<br />
                                SK유비케어 ｜ 새마을운동중앙회<br />
                                서울시생활체육회 ｜ 태평양물산 ｜ TS대한제당<br />
                                산업연구원 ｜ 연승어패럴 ｜ 투썸플레이스<br />
                                쿠우쿠우 등<br />
                                기업 노무관리 진단 및 기업자문 다수 수행
                            </p>
                            <p>
                                EBS ｜ 항로표지기술협회 ｜ 한국에너지공단<br />
                                과학기술연합대학원대학교 ｜ 산업연구원<br />
                                올제텍 등 ｜ 기업HR컨설팅 다수 수행<br />
                                롯데손해보험 ｜ TS대한제당 ｜ ㈜신흥<br />
                                에코시안 ｜ 한국지하수 지열협회 등<br />
                                노사분쟁 관련 업무 다수 수행 등
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Intro