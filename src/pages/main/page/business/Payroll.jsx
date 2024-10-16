import React from 'react'
import styles from '../../style/business/Payroll.module.css'
import commonStyles from '../../style/Common.module.css'
import classNames from 'classnames'
import Categorys from '../../component/Categorys'
import img1 from '../../assets/img/business/payroll002.png'
import img2 from '../../assets/img/business/payroll003.png'
import { motion } from 'framer-motion';

const Payroll = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    상호 원만한 협력을 이끌어 낼 수 있는 최적의 프로그램을 제시하고 있습니다.
                </p>
            </div>
            <Categorys url={'payroll'} />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    src={img1}
                    alt=''
                ></motion.img>
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
                    <span>급여관리</span>란?
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.description}
                >
                    급여업무대행서비스로, 기업 내 인사, 회계팀에서 직접 운영하는 급여 업무<br />
                    (급여계산, 4대보험관리, 퇴직금 계산 등)를 전문성을 가진 노무법인에 위탁하여 운영하는 서비스
                </motion.p>
            </div>
            <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
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
                        급여관리 <span>서비스 프로세스</span>
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
                            <p>
                                인사, 급여 기초자료 및<br />
                                근태자료 발송
                            </p>
                            <p>회사</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                관련 법률 검토 후<br />
                                급여 데이터화 작업<br />
                                및 명세서 작성
                            </p>
                            <p>노무법인 이음</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                급여 이체 및<br />
                                명세서 발송
                            </p>
                            <p>회사</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                관련 4대보험 신고 등<br />
                                사후관리
                            </p>
                            <p>노무법인 이음</p>
                        </div>
                    </motion.div>
                </div>
            </div>
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
                        노무법인 이음과 <span>함께 한다면?</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.box}
                    >
                        <img src={img2} alt='' />
                        <ul>
                            <li>
                                <div>①</div>
                                <div>회사의 급여관리 관련 <span>업무전문성 강화</span></div>
                            </li>
                            <li>
                                <div>②</div>
                                <div>급여 관련 <span>노무리스크 최소화</span></div>
                            </li>
                            <li>
                                <div>③</div>
                                <div>직접관리 대비 <span>비용 절감</span> 효과</div>
                            </li>
                            <li>
                                <div>④</div>
                                <div>기업 본연의 <span>전문성 강화</span> 가능</div>
                            </li>
                            <li>
                                <div>⑤</div>
                                <div>제3자에 위탁함으로써 <span>급여 비밀유지</span></div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Payroll