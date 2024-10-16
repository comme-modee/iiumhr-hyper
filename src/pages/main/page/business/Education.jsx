import classNames from 'classnames'
import React from 'react'
import styles from '../../style/business/Education.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'
import icon1 from '../../assets/img/business/edu005.png'
import icon2 from '../../assets/img/business/edu006.png'
import icon3 from '../../assets/img/business/edu007.png'
import icon4 from '../../assets/img/business/edu008.png'
import icon5 from '../../assets/img/business/edu009.png'
import icon6 from '../../assets/img/business/edu010.png'
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    실전에서 바로 적용하고 사용 가능한 실무형 강의 및 교육을 진행합니다.
                </p>
            </div>
            <Categorys url={'edu'} />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.title}
                >
                    노무 강의 및 교육 서비스 <span>프로세스</span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.process}
                >
                    <div className={styles.box}>
                        <p>01</p>
                        <p>교육 목표 및 커리큘럼 수립</p>
                        <p>
                            의뢰하신 교육 내용에 대한<br />
                            목표 및 커리큘럼 수립
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>02</p>
                        <p>교육 자료 작성</p>
                        <p>
                            교육 목표 및 커리큘럼에 부합하는<br />
                            교육자료를 작성하고 담당자에게 피드백
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>04</p>
                        <p>진행 후 내용 피드백</p>
                        <p>
                            교육 실시 후 관련 내용에 대한<br />
                            질의 응답에 대한 피드백
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>03</p>
                        <p>강의 및 교육 진행</p>
                        <p>
                            교육 목표에 따라 교육 범위를 정의하고<br />
                            이를 대상으로 실무형 교육을 진행
                        </p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1
                }}
                className={styles.sec3}
            ></motion.div>
            <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        노무 강의 및 교육 서비스 <span>주요 내용</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.contentContainer}
                    >
                        <div className={styles.content}>
                            <img src={icon1} alt='' width={80} />
                            <p>
                                개별적 근로 관계<br />
                                법령 실무
                            </p>
                        </div>
                        <div className={styles.content}>
                            <img src={icon2} alt='' width={90} />
                            <p>
                                집단적 근로 관계<br />
                                법령 실무
                            </p>
                        </div>
                        <div className={styles.content}>
                            <img src={icon3} alt='' width={80} />
                            <p>
                                비정규직 관련<br />
                                근로 관계 법령
                            </p>
                        </div>
                        <div className={styles.content}>
                            <img src={icon4} alt='' width={50} />
                            <p>
                                여성 근로자 관련<br />
                                노동 관계 법령
                            </p>
                        </div>
                        <div className={styles.content}>
                            <img src={icon5} alt='' width={80} />
                            <p>
                                개인정보<br />
                                보호법
                            </p>
                        </div>
                        <div className={styles.content}>
                            <img src={icon6} alt='' width={70} />
                            <p>
                                직장 내 성희롱<br />
                                예방 교육
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={classNames(styles.sec5, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        노무 강의 및 교육 서비스의 <span>기대효과</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.boxContainer}
                    >
                        <div>
                            노무 관리에 대한<br />
                            기업의 역량 제고
                        </div>
                        <div>
                            실무형 강의, 교육을 통한<br />
                            담당자의 현장 적용력 제고
                        </div>
                        <div>
                            노동 이슈 전반에 걸친<br />
                            높은 이해도
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Education